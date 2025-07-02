# 📧 email-sentry

[![Author](https://img.shields.io/badge/Author-@ameghcoder-blue?logo=github)](https://github.com/ameghcoder)
[![NPM version](https://img.shields.io/npm/v/email-sentry?color=blue&label=npm)](https://www.npmjs.com/package/email-sentry)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Run Tests](https://github.com/ameghcoder/email-sentry/actions/workflows/test.yml/badge.svg)](https://github.com/ameghcoder/email-sentry/actions/workflows/test.yml)

---

`email-sentry` is a lightweight and production-ready utility to:

- ✅ Validate email format
- 🚫 Detect disposable/temp email domains
- 📩 Normalize Gmail aliases, e.g.
  - `user+promo@gmail.com` → `user@gmail.com`
  - `E.X.A.M+test@gmail.com` → `example@gmail.com`
  - `User.Name+second@yahoo.com` → `user.name@yahoo.com` (dots preserved in some clients)

---

## Updates

- `1.0.2 version`
  - supports only the Gmail normalization
  - Contains 4.0k disposable domain name to validate
- `1.1.0 version`
  - supports @gmail.com, @yahoo.com, @outlook.com, @hotmail.com, @live.com, @msn.com, @icloud.com, @protonmail.com, @zoho.com (now a wide range to protect your website from spoofing and fake accounts)
  - Contains 4.5k disposable domain name to validate

---

## Features

- Simple API
- Tiny & dependency-light
- Helps prevent spam/bots during user signups
- Supports thousands of disposable email providers
- Built in TypeScript (fully typed)

---

## Installation

```bash
npm install email-sentry
# or
yarn add email-sentry
```

---

## Usage

```ts
import { emailSentry } from "email-sentry";

const result = emailSentry("user+promo@mailinator.com", {
  validate: true,
  checkDisposable: true,
  normalizeGmailAliases: true, //deprecated
  normalizeEmail: true // Use this instead of normalizeGmailAliases
});
/*
normalizeGmailAliases and normalizeEmail gives the same result
*/

console.log(result);
/*
{
  inputEmail: 'user+promo@mailinator.com',
  success: true,
  isValid: true,
  isDisposable: true,
  outputEmail: 'user@gmail.com'
}
*/
```

---

## Options

| Option                | Type      | Description                                       |
|------------------------|-----------|---------------------------------------------------|
| `validate`             | `boolean` | Validates email using the powerful email validator package   |
| `checkDisposable`      | `boolean` | Checks against known disposable email domains, contains 5000+ disposable domains data   |
| **@deprecated** `normalizeGmailAliases` | `boolean` | Removes `+something` from Gmail addresses and prevent the same email address to use to create account, use `normalizeEmail` instead         |
| `normalizeEmail` | `boolean` | Removes `+something` from All email clients like yahoo, zoho, msn, outlook and more client email addresses and prevent the same email address to use to create account         |

---

## Testing

Run all tests with:

```bash
npm test
```

Or watch mode:

```bash
npm run test:watch
```

---

## License

MIT © [Yashraj](https://github.com/ameghcoder)

---

## Author

Made with ❤️ by [**Yashraj**](https://linkedin.com/in/yrjdeveloper)

If you like this project, consider ⭐️ starring the repo or sharing it. It helps a lot!
