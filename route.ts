// Array of routes that are accessible to the public
// These routes do not require authentication
// @type {string[]}

// export const publicRoute = ["/sign-in", "/sign-up"];

/**
 * Array of routes that are used for authentication
 * These routes will redicrect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/sign-in", "/sign-up"];

/**
 *  The prefix for the API authentication routes
 * Routes that start with this prefix are used for API authentication purposes.
 * */
export const apiAuthPrefix = "/api/auth";

/** The default redirect path after the user has loggedin */
export const DEFAULT_LOGIN_REDIRECT = "/";
