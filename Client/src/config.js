// Basic configuration for API Endpoints
const isProduction = import.meta.env.PROD;

// If we are in production (or serving from the same origin), we use relative paths.
// If developing (Vite on 5173, Server on 4000), we use the full URL.
// But since we set up a proxy in vite.config.js, we can use relative paths there too!
// However, to be safe and explicit:

const API_BASE_URL = "https://mediscope-2-server.onrender.com";

export const getApiUrl = (endpoint) => {
    // Remove leading slash if present to avoid double slashes if we join
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;

    return `${API_BASE_URL}/${cleanEndpoint}`;
};

// For direct socket connection if needed
export const SOCKET_URL = "https://mediscope-2-server.onrender.com";
