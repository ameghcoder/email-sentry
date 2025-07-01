/**
 * This function normalizes Gmail aliases.
 * For example: example@gmail.com and example+another@gmail.com point to the same email address, and can be used to create multiple accounts with the same email, so this function normalizes Gmail aliases such as example+another@gmail.com to example@gmail.com. If the given email is not Gmail, it will return it without any changes.
 * @param email email that want to normalize, only gmail accepted
 * @returns string normalized email
 */
export function normalizeAliasIfGmail(email: string): string {
  const extractDomain = email.split("@")[1]?.toLowerCase();
  if (extractDomain === "gmail.com" && email.includes("+")) {
    return email.split("+")[0]?.toLowerCase() + "@gmail.com";
  } else {
    return email;
  }
}
