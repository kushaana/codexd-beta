import * as vscode from "vscode";
import { getTokens } from "./openai";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "codexd-beta" is now active!');

  let disposable = vscode.commands.registerCommand(
    "codexd-beta.helloWorld",
    () => {
      vscode.window.showInformationMessage(getTokens());
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
