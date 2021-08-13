/* eslint-disable sort-keys */
module.exports = {
    components: {
      categories: [
        {
            name: 'General',
            include: [
                'src/components/Button/Button.js'
            ]
        }
      ],
      
      webpackConfig: './webpack.uxpin.config.js',
    },
    name: 'UXPin Merge Boilerplate',
  };