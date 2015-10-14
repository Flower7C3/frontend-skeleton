var rsync = require('./auth-rsync');
var ftp = require('./auth-ftp');

module.exports = {
    options: {
        inlineCss: {
            applyStyleTags: true,
            applyLinkTags: false,
            removeStyleTags: true,
            removeLinkTags: false
        },
        autoprefixerBrowsers: [
            'last 2 versions',
            'safari 5',
            'ie 8',
            'ie 9',
            'opera 12.1',
            'ios 6',
            'android 4'
        ],
        base64: {
            extensions: ['png'],
            maxImageSize: 20 * 1024 //bytes
        },
        rsync: rsync,
        ftp: ftp
    },
    modules: {
        inlineCSS: true,
        imageDimensions: true,
        webp: false,
        gzip: false
    }
};