import { isDisposableEmail } from "./isDisposableEmail";
import { validateEmail } from "./validateEmail";
import { normalizeEmailAliases } from "./normalizeEmailAlias";

export interface EmailSentryResult {
  inputEmail: string;
  success: boolean;
  isValid?: boolean;
  isDisposable?: boolean;
  outputEmail?: string;
  message?: string;
}

interface EmailSentryOptions {
  validate?: boolean;
  /**
   * @deprecated normalizeGmailAliases, use normalizeEmail instead for better normalization.
   */
  normalizeGmailAliases?: boolean;
  normalizeEmail?: boolean;
  checkDisposable?: boolean;
}

export function emailSentry(
  email: string,
  options: EmailSentryOptions
): EmailSentryResult {
  const result: EmailSentryResult = {
    inputEmail: email,
    success: false,
  };

  try {
    const {
      validate = false,
      normalizeGmailAliases = false,
      normalizeEmail = false,
      checkDisposable = false,
    } = options || {};

    const shouldNormalize = normalizeEmail || normalizeGmailAliases;

    if (!validate && !shouldNormalize && !checkDisposable) {
      return {
        ...result,
        message:
          "You must enable at least one of the following: validate, normalizeGmailAliases, normalizeEmail, checkDisposable",
      };
    }

    if (validate) {
      result.isValid = validateEmail(email);

      if (!result.isValid) {
        return result;
      }
    }

    if (checkDisposable) {
      result.isDisposable = isDisposableEmail(email);
    }

    if (shouldNormalize) {
      if (normalizeGmailAliases && !normalizeEmail) {
        console.warn(
          `[email-sentry] ⚠️ "normalizeGmailAliases" is deprecated. Please use "normalizeEmail" instead.`
        );
      }
      result.outputEmail = normalizeEmailAliases(email);
    }

    return {
      ...result,
      success: true,
    };
  } catch (error) {
    return {
      ...result,
      message:
        error instanceof Error
          ? error.message
          : "Unexpected error occurred during email check.",
    };
  }
}
