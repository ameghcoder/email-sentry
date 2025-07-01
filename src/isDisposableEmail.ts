import domains from "./data/disposable-domains.json";

/**
 * This function is used to check if an email is disposable or not, it checks the given email domain in our disposable-domains list.
 * @param email email that want to check is disposable or not
 * @returns boolean true if email is disposable, false otherwise
 */
export function isDisposableEmail(email: string): boolean {
  const extractDomain = email.split("@")[1]?.toLowerCase();
  if (extractDomain && domains.includes(extractDomain)) {
    return true;
  } else {
    return false;
  }
}
