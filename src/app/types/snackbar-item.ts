import { TranslationKey } from './translation';

export type SnackbarVariant = 'success' | 'error';
type SnackbarId = string;

export type SnackbarItem = {
  id: SnackbarId;
  variant: SnackbarVariant;
  titleKey: TranslationKey;
  bodyKey?: TranslationKey;
  autoDismissMs?: number;
  confirmLabelKey?: TranslationKey;
  createdAt: number;
};
