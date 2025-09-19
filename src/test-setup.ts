import { TestBed } from '@angular/core/testing';
import * as fs from 'node:fs';
import * as path from 'node:path';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import {
  BrowserTestingModule,
  platformBrowserTesting,
} from '@angular/platform-browser/testing';
import { afterEach, beforeEach } from 'vitest';

TestBed.initTestEnvironment([BrowserTestingModule], platformBrowserTesting(), {
  errorOnUnknownElements: true,
  errorOnUnknownProperties: true,
});

beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [
      provideHttpClient(),
      provideHttpClientTesting(),
      provideZonelessChangeDetection(),
    ],
  });
});

afterEach(() => TestBed.resetTestingModule());

const origFetch = globalThis.fetch;

globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
  const toUrl = (x: any) => {
    if (x instanceof URL) return x;
    if (typeof x === 'string') {
      if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(x)) return new URL(x);
      const base = globalThis.window?.location?.origin ?? 'http://localhost/';
      return new URL(x, base);
    }
    if (x && typeof x.url === 'string') return new URL(x.url);
    return new URL(
      String(x),
      globalThis.window?.location?.origin ?? 'http://localhost/',
    );
  };

  const u = toUrl(input);

  if (u.pathname.startsWith('/assets/i18n/')) {
    const filePath = path.join(process.cwd(), 'src', u.pathname.slice(1));
    try {
      const buf = fs.readFileSync(filePath);
      return new Response(buf, {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch {
      return new Response('{"error":"missing"}', {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  return origFetch(input as any, init as any);
}) as typeof fetch;
