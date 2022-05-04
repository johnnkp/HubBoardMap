/* PROGRAM HubBoard main page driver - Centralise export of HubBoard main page
 * PROGRAMMER: johnnkp and SzelamC
 * USAGE: import {
 *          Adminpage,
 *          ChangePasswordpage,
 *          Mainpage,
 *          PMpage,
 *          Profilepage,
 *          Syncpage
 *        } from "<relative directory>/pages/hubboard/main";
 * VERSION 1: written 05-04-2022
 * Revision 1.1: 04-05-2022 add code comment
 * PURPOSE: Centralise authentication HubBoard main page variable to
 *          simplify import package.
 * DATA STRUCTURE:
 * export { default as Mainpage } - Mainpage.jsx
 * export { default as PMpage } - PMpage.jsx
 * export { default as Syncpage } - Syncpage.jsx
 * export { default as Adminpage } - Adminpage.jsx
 * export { default as ChangePasswordpage } - ChangePasswordpage.jsx
 * export { default as Profilepage } - Profilepage.jsx */

export {default as Mainpage} from "./Mainpage";
export {default as PMpage} from "./PMpage";
export {default as Syncpage} from "./Syncpage";
export {default as Adminpage} from "../profile/Adminpage";
export {default as ChangePasswordpage} from "../profile/ChangePasswordpage";
export {default as Profilepage} from "../profile/Profilepage";
