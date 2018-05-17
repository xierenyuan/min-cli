module.exports = {<% if (useGlobalStyle) { %>
  style: {
    brandColor: '#FF0077',
    controlColor: '#FF5777',
    mainHeadingColor: '#333333',
    subHeadingColor: '#666666',
    darkPromptColor: '#999999',
    splitLineColor: '#ECECEC',
    backgroundColour: '#EFEFEF'
  },<% } %>
  prefix: '<%= packagePrefix %>',
  dest: '<%= projectDest %>',
  npm: {
    dest: '<%= npmDest %>'<% if (projectType === options.ProjectType.Component) { %>,
    scope: '<%= packageScope %>'<% } %>
  },
  alias: {
    components: 'src/components'
  },
  compilers: {
    babel: {
      sourceMaps: 'inline',
      presets: [
        'env'
      ],
      plugins: [
        'syntax-export-extensions',
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-export-extensions'
      ]
    }
  }
}
