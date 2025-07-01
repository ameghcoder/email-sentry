import validator from "validator";
/**
 * This function validate your email, this is a powerful email validator that uses the 'validator' package
 * @param email email that want to validate
 * @returns boolean true if valid, false otherwise
 */
export function validateEmail(email: string): boolean {
  return validator.isEmail(email);
}
