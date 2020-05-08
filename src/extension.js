const vscode = require('vscode')

const getName = require('./getName.js')
const getFolder = require('./getFolder.js')
const generateComponent = require('./generateComponent.js')

const config = vscode.workspace.getConfiguration('vue-component-template')
console.log(config.defaultStyleLang)

const activate = ctx => {
  console.log('Extension "vue-component-template" is now active!')
  const fc = vscode.commands.registerCommand('extension.createVueComponent', async param => {
    const componentName = await getName()
    const folderPath = await getFolder(param)
    generateComponent(componentName, folderPath, config.defaultStyleLang)
  })
  ctx.subscriptions.push(fc)
  return false
}

exports.activate = activate
