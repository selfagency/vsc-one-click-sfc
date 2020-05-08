const vscode = require('vscode')
const fs = require('fs')
const path = require('path')

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

const generateComponentName = name => {
  if (!name) {
    console.error('Name cannot be blank.')
    return
  }

  if (/\_/g.test(name)) {
    name = name.split('_')
    name = name.forEach(n => capitalize(n))
    name = name.join('')
  } else {
    name = capitalize(name)
  }

  return name
}

const generateVueComponent = (componentName, folderPath) => {
  const className = generateComponentName(componentName)
  const fullPath = `${folderPath}/${className}.vue`

  if (fs.existsSync(fullPath)) {
    console.log(`${componentName} already exists. Please choose another name.`)
    return
  }

  const jsFile = path.resolve(fullPath)
  const componentTemplate = path.resolve(__dirname, './file_template/component.txt')
  const jsFileContent = fs.readFileSync(componentTemplate, { encoding: 'utf-8' })

  fs.writeFileSync(jsFile, jsFileContent.replace(/className/g, className))
  vscode.window.showInformationMessage(`Created component ${className} at ${fullPath}.`)
}

const activate = context => {
  console.log('Extension "vue-component-template" is now active!')

  const fc = vscode.commands.registerCommand('extension.createVueComponent', async param => {
    const componentName = (
      await vscode.window.showInputBox({
        prompt: 'Enter a name for your new component',
        placeHolder: 'ComponentName'
      })
    ).replace('.vue', '')

    if (componentName) {
      const folderPath =
        param && param.fsPath
          ? param.fsPath
          : (
              await vscode.window.showInputBox({
                prompt: 'Folder in which to place your new component',
                placeHolder: 'components'
              })
            ).replace(/\/$/, '')

      generateVueComponent(componentName, folderPath)
    } else {
      return
    }
  })

  context.subscriptions.push(fc)
}
exports.activate = activate

function deactivate() {}
exports.deactivate = deactivate
