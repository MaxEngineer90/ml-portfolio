// ===== ALTERNATIVE 1: Test Wrapper Function =====
// src/test-setup.ts
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// ✅ Global wrapper function (standalone approach)
export function configureStandaloneTest(testConfig: any = {}) {
  return TestBed.configureTestingModule({
    ...testConfig,
    providers: [
      // Global providers wie in app.config.ts
      provideZonelessChangeDetection(),
      provideHttpClient(withFetch()),
      // Test-specific providers
      ...(testConfig.providers || [])
    ]
  });
}

// ===== ALTERNATIVE 2: Test Constants =====
export const GLOBAL_TEST_PROVIDERS = [
  provideZonelessChangeDetection(),
  provideHttpClient(withFetch()),
];

// ===== ALTERNATIVE 3: Test Config Helper =====
export const createTestConfig = (overrides: any = {}) => ({
  providers: [
    ...GLOBAL_TEST_PROVIDERS,
    ...(overrides.providers || [])
  ],
  imports: overrides.imports || []
});
