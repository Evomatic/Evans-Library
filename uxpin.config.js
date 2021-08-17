/* eslint-disable sort-keys */
module.exports = {
    components: {
      categories: [
        {
            name: 'General',
            include: [
                'src/components/Button/Button.js',
                'src/components/ButtonM/ButtonM.js',
                'src/components/CardM/CardM.js',
                'src/components/CheckboxM/CheckboxM.js',
                'src/components/IconM/IconM.js',
                'src/components/Api/Api.js'
            ]
        }
      ],
      
      webpackConfig: './webpack.uxpin.config.js',
    },
    name: 'Evans-Library',
  };