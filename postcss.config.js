const config = {
  plugins: {
    'postcss-preset-env': {},
    'postcss-pxtorem': {
      rootValue: 75,
      propList: ['*'],
    },
  },
}

module.exports = config
