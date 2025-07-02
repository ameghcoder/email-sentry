import { emailSentry } from "./src";

const result = emailSentry("example+me@gmail.com", {
  validate: true,
  checkDisposable: true,
  normalizeEmail: true,
});
