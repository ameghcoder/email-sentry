import { describe, it, expect } from "vitest";
import { emailSentry } from "../src/index";

describe("emailSentry()", () => {
  it("should validate a correct email", () => {
    const result = emailSentry("test@example.com", { validate: true });
    expect(result.isValid).toBe(true);
  });

  it("should detect a disposable email", () => {
    const result = emailSentry("user@mailinator.com", {
      checkDisposable: true,
    });
    expect(result.isDisposable).toBe(true);
  });

  it("should normalize Gmail alias", () => {
    const result = emailSentry("abc+xyz@gmail.com", {
      normalizeGmailAliases: true,
    });
    expect(result.outputEmail).toBe("abc@gmail.com");
  });

  it("should return error when no options provided", () => {
    const result = emailSentry("abc@gmail.com", {});
    expect(result.success).toBe(false);
    expect(result.message).toBeDefined();
  });
});
