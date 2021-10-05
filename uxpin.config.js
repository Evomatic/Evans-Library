/* eslint-disable sort-keys */
module.exports = {
    components: {
      categories: [
        {
            name: 'General',
            include: [
                'src/components/ButtonGroups/ButtonGroups.js',
                'src/components/CheckboxM/CheckboxM.js',
                'src/components/IconM/IconM.js',
                'src/components/Button/Button.js',
                'src/components/ButtonM/ButtonM.js',
                'src/components/CardM/CardM.js',
                // 'src/components/CheckboxM/CheckboxM.js',
                // 'src/components/IconM/IconM.js',
                'src/components/Api/Api.js'
            ]
        },
        {
          name: 'Web',
          include: [
              'src/WebComponents/ButtonM/ButtonM.js',
              'src/WebComponents/ProductCardM/ProductCardM.js',
          ]
      }
      ],
      wrapper: 'src/components/Wrapper/UXPinWrapper.js',
      webpackConfig: './webpack.uxpin.config.js',
    },
    name: 'Evans-Library',
  };