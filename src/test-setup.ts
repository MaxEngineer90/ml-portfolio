import {
  ɵgetCleanupHook as getCleanupHook,
  getTestBed,
} from '@angular/core/testing';
import {
  BrowserTestingModule,
  platformBrowserTesting,
} from '@angular/platform-browser/testing';
import { afterEach, beforeEach } from 'vitest';

// Einmalige Angular-Testumgebung initialisieren
getTestBed().initTestEnvironment(
  [BrowserTestingModule],
  platformBrowserTesting(),
  {
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true,
  },
);

// Sauber auf-/aufräumen je Testlauf
beforeEach(getCleanupHook(false));
afterEach(getCleanupHook(true));
