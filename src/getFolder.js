const vscode = require('vscode')

const getFolder = async param => {
  return param && param.fsPath
    ? param.fsPath
    : (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length
        ? `${vscode.workspace.workspaceFolders[0].uri.fsPath}/`
        : '') +
        (
          await vscode.window.showInputBox({
            prompt: 'Folder in which to place your new component',
            placeHolder: 'components'
          })
        )
          .replace(/\/$/, '')
          .replace(/^\//, '')
}

module.exports = getFolder
