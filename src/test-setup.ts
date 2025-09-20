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

const originalFetch = globalThis.fetch;

globalThis.fetch = (async (
  requestInput: RequestInfo | URL,
  requestInit?: RequestInit,
) => {
  const toAbsoluteUrl = (input: RequestInfo | URL): URL => {
    if (input instanceof URL) return input;

    if (typeof input === 'string') {
      const looksAbsolute = /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(input);
      if (looksAbsolute) return new URL(input);

      const baseOrigin =
        globalThis.window?.location?.origin ?? 'http://localhost/';
      return new URL(input, baseOrigin);
    }

    if (
      typeof input === 'object' &&
      input !== null &&
      'url' in input &&
      typeof (input as Request).url === 'string'
    ) {
      return new URL((input as Request).url);
    }

    const baseOrigin =
      globalThis.window?.location?.origin ?? 'http://localhost/';
    return new URL(String(input), baseOrigin);
  };

  const requestUrl = toAbsoluteUrl(requestInput);

  if (requestUrl.pathname.startsWith('/assets/i18n/')) {
    const absoluteFilePath = path.join(
      process.cwd(),
      'src',
      requestUrl.pathname.slice(1),
    );

    try {
      const fileBuffer = fs.readFileSync(absoluteFilePath);
      return new Response(fileBuffer, {
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

  return originalFetch(requestInput, requestInit);
}) as typeof fetch;
