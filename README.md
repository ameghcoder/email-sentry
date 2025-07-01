# 📧 email-sentry

[![Author](https://img.shields.io/badge/Author-@ameghcoder-blue?logo=github)](https://github.com/ameghcoder)
[![NPM version](https://img.shields.io/npm/v/email-sentry?color=blue&label=npm)](https://www.npmjs.com/package/email-sentry)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Tests](https://github.com/yourusername/email-sentry/actions/workflows/test.yml/badge.svg)](https://github.com/yourusername/email-sentry/actions/workflows/test.yml)

---

`email-sentry` is a lightweight and production-ready utility to:

- ✅ Validate email format
- 🚫 Detect disposable/temp email domains
- 📩 Normalize Gmail aliases (e.g. `user+promo@gmail.com` → `user@gmail.com`)

---

## ✨ Features

- ✅ Simple API
- 📦 Tiny & dependency-light
- 🛡️ Helps prevent spam/bots during user signups
- 🔍 Supports thousands of disposable email providers
- 🔧 Built in TypeScript (fully typed)

---

## 📦 Installation

```bash
npm install email-sentry
# or
yarn add email-sentry
```

---

## 🚀 Usage

```ts
import { emailSentry } from "email-sentry";

const result = emailSentry("user+promo@mailinator.com", {
  validate: true,
  checkDisposable: true,
  normalizeGmailAliases: true,
});

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

## ⚙️ Options

| Option                | Type      | Description                                       |
|------------------------|-----------|---------------------------------------------------|
| `validate`             | `boolean` | Validates email using the powerful email validator package   |
| `checkDisposable`      | `boolean` | Checks against known disposable email domains, contains 5000+ disposable domains data   |
| `normalizeGmailAliases` | `boolean` | Removes `+something` from Gmail addresses and prevent the same email address to use to create account         |

---

## 🧪 Testing

Run all tests with:

```bash
npm test
```

Or watch mode:

```bash
npm run test:watch
```

---

## 📄 License

MIT © [Yashraj](https://github.com/ameghcoder)

---

## 🙋‍♂️ Author

Made with ❤️ by [**Yashraj**](https://github.com/ameghcoder)

If you like this project, consider ⭐️ starring the repo or sharing it. It helps a lot!
