/* eslint-disable sort-keys */
module.exports = {
    components: {
      categories: [
        {
            name: 'General',
            include: [
                // 'src/WebComponents/ButtonM/ButtonM.js',
                // 'src/WebComponents/ProductCardM/ProductCardM.js',
                'src/components/ButtonM/ButtonM.js',
                'src/components/CardM/CardM.js',
                'src/components/CheckboxM/CheckboxM.js',
                'src/components/IconM/IconM.js',
                'src/components/Api/Api.js',
                'src/components/ButtonGroups/ButtonGroups.js',
                'src/components/SampleButton/SampleButton.js'
            ]
        }
      ],
      wrapper: 'src/components/Wrapper/UXPinWrapper.js',
      webpackConfig: './webpack.uxpin.config.js',
    },
    name: 'Evans-Library',
  };



  58956486b9a13456e33857c44f0b54833cedffb0