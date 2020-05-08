const fs = require('fs')
const path = require('path')
const vscode = require('vscode')

const parseTemplate = require('./parseTemplate.js')

const generateVueComponent = (componentName, folderPath, styleLang) => {
  const fullPath = `${folderPath}/${componentName}.vue`

  if (fs.existsSync(fullPath)) {
    console.info(`${componentName} already exists. Please choose another name.`)
    return false
  }

  const componentFile = path.resolve(fullPath)

  const template = parseTemplate(
    fs.readFileSync(path.resolve(__dirname, './file_template/component.txt'), { encoding: 'utf-8' }),
    componentName,
    styleLang
  )

  fs.writeFileSync(componentFile, template)
  vscode.window.showInformationMessage(`Created component ${componentName} at ${fullPath}.`)
}

module.exports = generateVueComponent
