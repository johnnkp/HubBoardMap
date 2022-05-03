/* PROGRAM authentication page driver - Centralise export of authentication page
 * PROGRAMMER: SzelamC
 * USAGE: import {
 *          Auth,
 *          ForgotPassword,
 *          GoogleOAuth,
 *          ResetPassword
 *        } from "<relative directory>/pages/auth";
 * VERSION 1: written 03-03-2022
 * Revision 1.1: 03-05-2022 add code comment
 * PURPOSE: Centralise authentication page variable to simplify import package.
 * DATA STRUCTURE:
 * export { default as Auth } - Auth.jsx
 * export { default as ForgotPassword } - ForgotPassword.jsx
 * export { default as GoogleOAuth } - GoogleOAuth.jsx
 * export { default as ResetPassword } - ResetPassword.jsx */

export {default as Auth} from "./Auth"
export {default as ForgotPassword} from "./ForgotPassword"
export {default as GoogleOAuth} from "./GoogleOAuth"
export {default as ResetPassword} from "./ResetPassword"
