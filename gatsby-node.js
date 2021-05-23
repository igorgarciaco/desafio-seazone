const path = require(`path`)
const data = require('./content/properties.json')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const PageTemplate = path.resolve("./src/templates/Page.js")

    data.forEach(color_object => {
        var path = color_object.name;

        createPage({
            path,
            component: PageTemplate,
            context: color_object,
        })
    })



  
}