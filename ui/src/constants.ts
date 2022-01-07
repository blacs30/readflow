// API base URL
export const API_BASE_URL = process.env.REACT_APP_API_ROOT || 'https://readflow-api.lisowski-development.de'

// OIDC authority URL
export const AUTHORITY = process.env.REACT_APP_AUTHORITY || 'https://gitlab.com'

// OIDC client ID
export const CLIENT_ID =
  process.env.REACT_APP_CLIENT_ID || 'f7e9fc0df823db99e29df61d9e883d7727258bcd089d927d9b3f43768defbbac'

// Unauthenticated user redirect
export const REDIRECT_URL = process.env.REACT_APP_REDIRECT_URL || '/login'

// VERSION
export const VERSION = process.env.REACT_APP_VERSION || 'snapshot'
