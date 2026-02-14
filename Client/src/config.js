// Basic configuration for API Endpoints
const isProduction = import.meta.env.PROD;

// Use localhost for development, Render URL for production
const API_BASE_URL = isProduction
    ? "https://mediscope-2-server.onrender.com"
    : "http://localhost:4000";

export const getApiUrl = (endpoint) => {
    // Remove leading slash if present to avoid double slashes if we join
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;

    return `${API_BASE_URL}/${cleanEndpoint}`;
};

// For direct socket connection if needed
export const SOCKET_URL = API_BASE_URL;
