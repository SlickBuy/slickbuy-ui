// fetchService.js

const BASE_URL = "https://152.44.43.112:3002";

const headers = {
  "Content-Type": "application/json",
};

// Helper function to handle response
const handleResponse = async (response: any) => {
  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return await response.json();
  }
  return await response.text();
};

const fetchService = {
  get: (url: string) => {
    return fetch(`${BASE_URL}${url}`, {
      method: "GET",
      headers: headers,
    }).then(handleResponse);
  },

  post: (url: string, body: any) => {
    return fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    }).then(handleResponse);
  },

  // You can add more methods like PUT, DELETE, etc., following the same pattern
};

export default fetchService;
