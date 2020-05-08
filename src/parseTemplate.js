const parseTemplate = (template, componentName, styleLang) => {
  if (!template || !componentName) throw new Error('Template parser requires template and component name.')
  template = template.replace(/componentName/g, componentName)

  if (styleLang) {
    template = template.replace(/styleLang/g, styleLang)
  } else {
    template = template.replace(/styleLang/g, '')
  }

  return template
}

module.exports = parseTemplate
