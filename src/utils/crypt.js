import crypto from "crypto";
import config from "../config.js";

const PEPPER = config.server.pepper;
const SEPARATOR = ":";
const DIGEST = "sha512";
const ITERATIONS = 1000;
const SALTLEN = 16;
const KEYLEN = 64;

const crypt = Crypts();

export default crypt;

function Crypts() {
  function encryptPassword(password) {
    const salt = crypto.randomBytes(SALTLEN).toString("hex");

    const hash = crypto.pbkdf2Sync(
      password + PEPPER,
      salt,
      ITERATIONS,
      KEYLEN,
      DIGEST
    );

    return `${salt}${SEPARATOR}${ITERATIONS}${SEPARATOR}${hash.toString(
      "hex"
    )}`;
  }

  function verifyPassword(password, hash) {
    const [salt, iterations, key] = hash.split(SEPARATOR);
    const iterationsInt = parseInt(iterations, 10);
    const hashBuffer = Buffer.from(key, "hex");

    const verifyHash = crypto.pbkdf2Sync(
      password + PEPPER,
      salt,
      iterationsInt,
      hashBuffer.length,
      DIGEST
    );

    return crypto.timingSafeEqual(hashBuffer, verifyHash);
  }

  return { encryptPassword, verifyPassword };
}
