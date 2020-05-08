# Click-to-Add Vue Component Template for VS Code

Adds &#34;Create Vue Component&#34; to VS Code File Explorer right-click menu

![Version](https://img.shields.io/badge/version-0.1.13-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://marketplace.visualstudio.com/items?itemName=selfagency.vue-component-template)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: self_agency](https://img.shields.io/twitter/follow/self_agency.svg?style=social)](https://twitter.com/self_agency)

### 🏠 [Homepage](https://marketplace.visualstudio.com/items?itemName=selfagency.vue-component-template)

Creates a blank Vue single file component in the folder of your choosing.

- Capitalizes component names and converts snake_case to PascalCase.
- Checks if the component name you've chosen is a known HTML tag and, if so, prepends it with `Custom`.
- Generates a random component name if you don't feel like coming up with one.
- Inserts component name into template.
- Checks if the file already exists so there are no accidental overwrites.
- Allows you to specify a default style language in `settings.json`.

### Template

```vue
<template>
  <div></div>
</template>

<script>
export default {
  name: '[componentName]',
  components: {},
  props: {},
  data() {
    return {}
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>

<style lang="[styleLang]" scoped></style>
```

## Install

Press `⇧⌘P` and search for `selfagency.vue-component-template` or, from the command line:

```sh
code --install-extension selfagency.vue-component-template
```

## Usage

Right-click on a folder in the File Explorer pane and select, or press `⇧⌘P` and type, `Create Vue Component`.

You can specify a default style language (CSS, SASS, Less, Stylus, etc.) in `settings.json`:

```
{
  "vue-component-template.defaultStyleLang": "scss"
}
```

## Author

👤 **Daniel Sieradski <daniel@self.agency>**

- Website: https://self.agency
- Twitter: [@selfagency_llc](https://twitter.com/selfagency_llc)
- GitLab: [@selfagency](https://gitlab.com/selfagency)
- LinkedIn: [@selfagency](https://linkedin.com/in/selfagency)

## Acknowledgements

Icon by JunGSa from the Noun Project.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://gitlab.com/selfagency/vscode-vue-component-template/issues).

## Show your support

Give a ⭐️ if this project helped you!
