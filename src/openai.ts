import { openAiEndpoint } from "./config/endpoint.config";

export const getTokens = () => {
  const { baseUrl, apiKey } = openAiEndpoint();

  return `baseUrl: ${baseUrl} apiKey:
  ${apiKey}`;
};
