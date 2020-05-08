const rword = require('rword').rword
const vscode = require('vscode')
const tags = require('./tags.js')

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

const pascalize = str => {
  if (/\_/g.test(str)) {
    str = str.split('_')
    str = str.map(n => capitalize(n))
    str = str.join('')
  } else {
    str = capitalize(str)
  }

  return str
}

const getName = async () => {
  let name = await vscode.window.showInputBox({
    prompt: 'Enter a name for your new component',
    placeHolder: 'ComponentName'
  })

  if (name) {
    name = name.replace('.vue', '')

    for (let tag of tags) {
      if (tag.toLowerCase() === name.toLowerCase()) name = `custom_${tag}`
    }

    return pascalize(name)
  } else {
    return pascalize(rword.generate(3, { length: '3-5' }).join('_'))
  }
}

module.exports = getName
