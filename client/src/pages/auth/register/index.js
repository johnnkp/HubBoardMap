/* PROGRAM Register & Verification page driver
 *         - Centralise export of Register & Verification page
 * PROGRAMMER: SzelamC
 * USAGE: import {
 *          MailSuccess,
 *          MailVerification,
 *          Register,
 *          ResendEmailVerification
 *        } from "<relative directory>/pages/auth/register";
 * VERSION 1: written 03-03-2022
 * Revision 1.1: 03-05-2022 add code comment
 * PURPOSE: Centralise Register & Verification page variable to
 *          simplify import package.
 * DATA STRUCTURE:
 * export { default as MailSuccess } - MailSuccess.jsx
 * export { default as MailVerification } - MailVerification.jsx
 * export { default as Register } - Register.jsx
 * export { default as ResendEmailVerification } - ResendEmailVerification.jsx */

export {default as MailSuccess} from "./MailSuccess";
export {default as MailVerification} from "./MailVerification";
export {default as Register} from "./Register";
export {default as ResendEmailVerification} from "./ResendEmailVerification";
