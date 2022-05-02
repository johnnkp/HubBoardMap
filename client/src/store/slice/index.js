/* PROGRAM Redux Store Slice Driver - Centralise export of Redux Store Slice
 * PROGRAMMER: SzelamC
 * USAGE: import {authReducer, commentReducer, notificationReducer, todoListReducer} from "<relative directory>/store/slice";
 * VERSION 1: written 30-03-2022
 * Revision 1.1: 02-05-2022 add code comment
 * PURPOSE: Centralise Redux Store Slice function to simplify import package.
 * DATA STRUCTURE:
 * export { default as authReducer } - auth.js
 * export { default as commentReducer } - comment.js
 * export { default as notificationReducer } - notification.js
 * export { default as todoListReducer } - todo.js */

export {default as authReducer} from "./auth";
export {default as commentReducer} from "./comment";
export {default as notificationReducer} from "./notification";
export {default as todoListReducer} from "./todo";
