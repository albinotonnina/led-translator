module.exports = neutrino => {
    neutrino.config.module
        .rule('sass')
        .test(/\.scss$/)
        .loader('style', 'style-loader')
        .loader('css', 'css-loader', {
            modules: true,
            localIdentName: '[local]--[hash:base64:5]'
        })
        .loader('sass', 'sass-loader')
};
