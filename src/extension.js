const vscode = require('vscode')

const getName = require('./getName.js')
const getFolder = require('./getFolder.js')
const generateComponent = require('./generateComponent.js')

const config = vscode.workspace.getConfiguration('vue-component-template')

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

//                      oooo   .o88o.
//                      `888   888 `"
//    .oooo.o  .ooooo.   888  o888oo     .oooo.    .oooooooo  .ooooo.  ooo. .oo.    .ooooo.  oooo    ooo
//   d88(  "8 d88' `88b  888   888      `P  )88b  888' `88b  d88' `88b `888P"Y88b  d88' `"Y8  `88.  .8'
//   `"Y88b.  888ooo888  888   888       .oP"888  888   888  888ooo888  888   888  888         `88..8'
//   o.  )88b 888    .o  888   888  .o. d8(  888  `88bod8P'  888    .o  888   888  888   .o8    `888'
//   8""888P' `Y8bod8P' o888o o888o Y8P `Y888""8o `8oooooo.  `Y8bod8P' o888o o888o `Y8bod8P'     .8'
//                                                d"     YD                                  .o..P'
//                                                "Y88888P'         hello@self.agency        `Y8P'
