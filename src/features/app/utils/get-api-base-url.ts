export const getApiBaseUrl = () => {
  if (process.env.CODESPACE_NAME) return `https://${process.env.CODESPACE_NAME}-8000.app.github.dev`;
  if (process.env.API_URL) return process.env.API_URL;

  return 'http://localhost:8000';
};
