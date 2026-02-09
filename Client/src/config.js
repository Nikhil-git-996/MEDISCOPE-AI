// Basic configuration for API Endpoints
const isProduction = import.meta.env.PROD;

// If we are in production (or serving from the same origin), we use relative paths.
// If developing (Vite on 5173, Server on 4000), we use the full URL.
// But since we set up a proxy in vite.config.js, we can use relative paths there too!
// However, to be safe and explicit:

const API_BASE_URL = "http://localhost:4000"; // Fallback/Default

export const getApiUrl = (endpoint) => {
    // Remove leading slash if present to avoid double slashes if we join
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;

    // In many deployments, frontend and backend are on same origin
    // So relative paths '/signup' work perfectly.
    // Let's use relative paths by default if serving from the backend.

    return `/${cleanEndpoint}`;
};

// For direct socket connection if needed
export const SOCKET_URL = "/";
