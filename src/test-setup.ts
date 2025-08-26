// src/test-setup.ts
import '@analogjs/vitest-angular/setup-snapshots';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { getTestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';


getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

getTestBed().configureTestingModule({
  providers: [provideZonelessChangeDetection(),provideHttpClient(),provideHttpClientTesting]
});
