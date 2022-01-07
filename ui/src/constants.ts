// API base URL
export const API_BASE_URL = process.env.REACT_APP_API_ROOT || 'http://readflow'

// OIDC authority URL
export const AUTHORITY = process.env.REACT_APP_AUTHORITY || 'mock'

// OIDC client ID
export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || 'webapp'

// Unauthenticated user redirect
export const REDIRECT_URL = process.env.REACT_APP_REDIRECT_URL || '/login'

// VERSION
export const VERSION = process.env.REACT_APP_VERSION || 'snapshot'
