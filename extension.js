const vscode = require('vscode')
const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)

function generateComponentName(dirName) {
  let className = ''

  if (!dirName) throw new Error('Directory name cannot be null.')
  const nameArr = dirName.split('_')

  for (const name of nameArr) {
    className += capitalizeFirstLetter(name)
  }

  return className
}

function generateVueComponent(componentName, fullPath) {
  if (fs.existsSync(fullPath)) {
    console.log(`${componentName} already exists. Please choose another name.`)
    return
  }

  const className = generateComponentName(componentName)
  const componentTemplate = path.resolve(__dirname, './file_template/component.txt')
  let jsFile = path.resolve(`${fullPath}.vue`)
  let jsFileContent = fs.readFileSync(componentTemplate, { encoding: 'utf-8' })

  fs.writeFileSync(jsFile, jsFileContent.replace(/ClassName/g, className))

  exec(`cd ${fullPath} && git add .`, err =>
    err ? console.error('Command failed:', 'git add .') : console.log('command success:', 'git add .')
  )

  vscode.window.showInformationMessage('Component created.')
}

function activate(context) {
  console.log('"vue-component-template" is now active!')

  const fc = vscode.commands.registerCommand('extension.createcomponent', function(param) {
    const folderPath = param.fsPath

    const options = {
      prompt: 'Component name: ',
      placeHolder: 'Enter a name for your component (without a file extension)'
    }

    vscode.window.showInputBox(options).then(value => {
      if (!value) return

      const componentName = value
      const fullPath = `${folderPath}/${componentName}`

      generateVueComponent(componentName, fullPath)
    })
  })

  context.subscriptions.push(fc)
}
exports.activate = activate

function deactivate() {}
exports.deactivate = deactivate
