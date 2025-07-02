/**
 * This function normalizes Email aliases.
 * For example: example@gmail.com and example+another@gmail.com point to the same email address, and can be used to create multiple accounts with the same email, so this function normalizes Gmail aliases such as example+another@gmail.com to example@gmail.com. If the given email is not Gmail, it will return it without any changes.
 * Supported Clients: gmail.com, yahoo.com, outlook.com, hotmail.com, live.com, msn.com, icloud.com, protonmail.com, zoho.com
 * @param email email that want to normalize
 * @returns string normalized email
 */

export function normalizeEmailAliases(email: string): string {
  if (!email || !email.includes("@")) return email; // Fail-Safe fallback

  const trimmedEmail = email.trim().toLowerCase();
  const [rawLocal, rawDomain] = trimmedEmail.split("@");
  if (!rawDomain) return email;

  let normalizedLocal = rawLocal;

  const match = normalizationClient.find((nc) => nc.client === `@${rawDomain}`);
  if (!match) return trimmedEmail;

  if (match.ignored.includes("+")) {
    normalizedLocal = normalizedLocal.split("+")[0];
  }

  if (match.ignored.includes(".")) {
    normalizedLocal = normalizedLocal.replace(/\./g, "");
  }

  return `${normalizedLocal}@${rawDomain}`;
}

const normalizationClient = [
  {
    client: "@gmail.com",
    ignored: [".", "+"],
    caseInsensitive: true,
    notes: "Dots ignored, plus aliasing allowed",
  },
  {
    client: "@yahoo.com",
    ignored: ["+"],
    caseInsensitive: true,
    notes: "Dots preserved, plus aliasing supported",
  },
  {
    client: "@outlook.com",
    ignored: ["+"],
    caseInsensitive: true,
    notes: "Microsoft mail; dots preserved, plus aliasing supported",
  },
  {
    client: "@hotmail.com",
    ignored: ["+"],
    caseInsensitive: true,
    notes: "Same behavior as Outlook (Microsoft mail)",
  },
  {
    client: "@live.com",
    ignored: ["+"],
    caseInsensitive: true,
    notes: "Same behavior as Outlook (Microsoft mail)",
  },
  {
    client: "@msn.com",
    ignored: ["+"],
    caseInsensitive: true,
    notes: "Same behavior as Outlook (Microsoft mail)",
  },
  {
    client: "@icloud.com",
    ignored: ["+"],
    caseInsensitive: true,
    notes: "Dots preserved, plus aliasing supported",
  },
  {
    client: "@protonmail.com",
    ignored: ["+"],
    caseInsensitive: true,
    notes: "Dots preserved, plus aliasing supported",
  },
  {
    client: "@zoho.com",
    ignored: ["+"],
    caseInsensitive: true,
    notes: "Dots preserved, plus aliasing supported",
  },
];
