import webpack from 'webpack'
const BASE_URL = process.env.DEPLOY_ENV === 'GH_PAGES' ? `/` : '/'
module.exports = {
  plugins: [
    { src: '~/plugins/bootstrap.js', ssr: false },
    {src:'~/plugins/store-cache.js',ssr:false},
    { src: '~/plugins/music.js',ssr:false },
    { src: '~/plugins/elementUi.js',ssr:false },
    {src:'~/plugins/star.js',ssr:false}
  ],
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-blog-front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
       // 注意static不要加！！！
      {src : 'https://cdn.cptyun.com/jquery/3.4.1/jquery.min.js'},
      {src: 'js/mouseEvent.js'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor:['axios','jquery','bootstrap'],
    plugins:[
      new webpack.ProvidePlugin(
        {
          $:'jquery',
          jQuery:'jquery',
          'window.jQuery':'jquery'
        }
      ),
      new webpack.DefinePlugin({
        'process.env': {
          BASE_URL: JSON.stringify(BASE_URL)
        }
      })
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

