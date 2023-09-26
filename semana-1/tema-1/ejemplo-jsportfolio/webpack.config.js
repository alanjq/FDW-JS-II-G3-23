const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        // Generar los archivos para subir al servidor dentro de la carpeta "salida"
        path: path.resolve(__dirname, 'salida'),
        filename: 'resultado.js',
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        // Permitimos usar HTML dentro
        new HtmlWebpackPlugin({
            inject: true,
            template: "./public/index.html",
            filename: "./index.html"
        }),
    ]
}
