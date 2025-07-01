import { isDisposableEmail } from "./isDisposableEmail";
import { normalizeAliasIfGmail } from "./normalizeGmailAlias";
import { validateEmail } from "./validateEmail";

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
  normalizeGmailAliases?: boolean;
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
      checkDisposable = false,
    } = options || {};

    if (!validate && !normalizeGmailAliases && !checkDisposable) {
      return {
        ...result,
        message:
          "You must enable at least one of the following: validate, normalizeGmailAliases, checkDisposable",
      };
    }

    if (validate) {
      result.isValid = validateEmail(email);
    }

    if (checkDisposable) {
      result.isDisposable = isDisposableEmail(email);
    }

    if (normalizeGmailAliases) {
      result.outputEmail = normalizeAliasIfGmail(email);
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
