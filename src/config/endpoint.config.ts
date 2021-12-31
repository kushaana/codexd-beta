import * as vscode from "vscode";

export const openAiEndpoint = () => {
  const engineId = vscode.workspace
    .getConfiguration("openAiEndpoint")
    .get("engineId");

  const key = vscode.workspace.getConfiguration("openAiEndpoint").get("key");

  return {
    baseUrl: `https://api.openai.com/v1/engines/${engineId}/completions`,
    apiKey: key || process.env.OPENAI_ENDPOINT_KEY || "",
  };
};
