var src = 'app',
    build = 'build',
    development = 'build/development',
    production = 'build/production',
    srcAssets = src + '/_assets',
    developmentAssets = build + '/assets',
    productionAssets = build + '/production/assets',
    config = require('../config/config');

try {
    config.options.ftp = require('../config/auth-ftp');
    config.options.rsync = require('../config/auth-rsync');
} catch (e) {

}

module.exports = {
    browsersync: {
        development: {
            server: {
                baseDir: [development, build, src]
            },
            port: 9999,
            files: [
                developmentAssets + '/css/*.css',
                developmentAssets + '/js/*.js',
                developmentAssets + '/images/**',
                developmentAssets + '/fonts/*'
            ]
        },
        production: {
            server: {
                baseDir: [production]
            },
            port: 9998
        }
    },
    delete: {
        src: [developmentAssets]
    },
    imageDimensions: {
        development: {
            src: development + '/**/*.html',
            dest: development + '/',
            images: '../../../../../../' + srcAssets + '/images/',
            enabled: config.modules.imageDimensions
        },
        production: {
            src: production + '/**/*.html',
            dest: production + '/',
            images: '../../../../../../' + srcAssets + '/images/',
            enabled: config.modules.imageDimensions
        }
    },
    inlineCss: {
        development: {
            src: development + '/**/*.html',
            dest: development + '/',
            options: config.options.inlineCss,
            enabled: config.modules.inlineCSS
        },
        production: {
            src: production + '/**/*.html',
            dest: production + '/',
            options: config.options.inlineCss,
            enabled: config.modules.inlineCSS
        }
    },
    jekyll: {
        development: {
            src: src,
            dest: development,
            config: 'config/jekyll.yml'
        },
        production: {
            src: src,
            dest: production,
            config: 'config/jekyll.yml,config/jekyll.prod.yml'
        }
    },
    sass: {
        src: srcAssets + '/scss/**/*.{sass,scss}',
        dest: developmentAssets + '/css',
        options: {
            noCache: true,
            compass: false,
            bundleExec: true,
            sourcemap: true,
            sourcemapPath: '../../_assets/scss'
        }
    },
    autoprefixer: {
        browsers: config.options.autoprefixerBrowsers,
        cascade: true
    },
    browserify: {
        // Enable source maps
        debug: true,
        // Additional file extensions to make optional
        extensions: ['.coffee', '.hbs'],
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: './' + srcAssets + '/javascripts/application.js',
            dest: developmentAssets + '/js',
            outputName: 'application.js'
        }, {
            entries: './' + srcAssets + '/javascripts/head.js',
            dest: developmentAssets + '/js',
            outputName: 'head.js'
        }]
    },
    images: {
        src: srcAssets + '/images/**/*',
        dest: developmentAssets + '/images'
    },
    webp: {
        src: productionAssets + '/images/**/*.{jpg,jpeg,png}',
        dest: productionAssets + '/images/',
        options: {},
        enabled: config.modules.webp
    },
    gzip: {
        src: production + '/**/*.{html,xml,json,css,js}',
        dest: production,
        options: {},
        enabled: config.modules.gzip
    },
    copyfonts: {
        development: {
            src: srcAssets + '/fonts/*',
            dest: developmentAssets + '/fonts'
        },
        production: {
            src: developmentAssets + '/fonts/*',
            dest: productionAssets + '/fonts'
        }
    },
    copyfiles: {
        development: {
            src: srcAssets + '/files/*',
            dest: developmentAssets + '/files'
        },
        production: {
            src: developmentAssets + '/files/*',
            dest: productionAssets + '/files'
        }
    },
    base64: {
        src: developmentAssets + '/css/*.css',
        dest: developmentAssets + '/css',
        options: {
            baseDir: build,
            extensions: config.options.base64.extensions,
            maxImageSize: config.options.base64.maxImageSize, // bytes
            debug: false
        }
    },
    watch: {
        jekyll: [
            '_config.yml',
            '_config.build.yml',
            'stopwords.txt',
            src + '/_data/**/*.{json,yml,csv}',
            src + '/_includes/**/*.{html,xml}',
            src + '/_layouts/*.html',
            src + '/_locales/*.yml',
            src + '/_plugins/*.rb',
            src + '/_posts/*.{markdown,md}',
            src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
            src + '/*'
        ],
        sass: srcAssets + '/scss/**/*.{sass,scss}',
        scripts: srcAssets + '/javascripts/**/*.js',
        images: srcAssets + '/images/**/*',
        sprites: srcAssets + '/images/**/*.png',
        svg: 'vectors/*.svg'
    },
    scsslint: {
        src: [
            srcAssets + '/scss/**/*.{sass,scss}',
            '!' + srcAssets + '/scss/base/_sprites.scss',
            '!' + srcAssets + '/scss/helpers/_meyer-reset.scss'
        ],
        options: {
            bundleExec: true
        }
    },
    jshint: {
        src: srcAssets + '/javascripts/*.js'
    },
    sprites: {
        src: srcAssets + '/images/sprites/icon/*.png',
        dest: {
            css: srcAssets + '/scss/base/',
            image: srcAssets + '/images/sprites/'
        },
        options: {
            cssName: '_sprites.scss',
            cssFormat: 'css',
            cssOpts: {
                cssClass: function (item) {
                    // If this is a hover sprite, name it as a hover one (e.g. 'home-hover' -> 'home:hover')
                    if (item.name.indexOf('-hover') !== -1) {
                        return '.icon-' + item.name.replace('-hover', ':hover');
                        // Otherwise, use the name as the selector (e.g. 'home' -> 'home')
                    } else {
                        return '.icon-' + item.name;
                    }
                }
            },
            imgName: 'icon-sprite.png',
            imgPath: '/assets/images/sprites/icon-sprite.png'
        }
    },
    optimize: {
        css: {
            src: developmentAssets + '/css/*.css',
            dest: productionAssets + '/css/',
            options: {
                keepSpecialComments: 0
            }
        },
        js: {
            src: developmentAssets + '/js/*.js',
            dest: productionAssets + '/js/',
            options: {}
        },
        images: {
            src: developmentAssets + '/images/**/*.{jpg,jpeg,png,gif}',
            dest: productionAssets + '/images/',
            options: {
                optimizationLevel: 3,
                progessive: true,
                interlaced: true
            }
        },
        html: {
            src: production + '/**/*.html',
            dest: production,
            options: {
                collapseWhitespace: true
            }
        }
    },
    revision: {
        src: {
            assets: [
                productionAssets + '/css/*.css',
                productionAssets + '/js/*.js',
                productionAssets + '/images/**/*'
            ],
            base: production
        },
        dest: {
            assets: production,
            manifest: {
                name: 'manifest.json',
                path: productionAssets
            }
        }
    },
    collect: {
        src: [
            productionAssets + '/manifest.json',
            production + '/**/*.{html,xml,txt,json,css,js}',
            '!' + production + '/feed.xml'
        ],
        dest: production
    },
    rsync: {
        src: production + '/**',
        base: production,
        options: config.options.rsync
    },
    ftp: {
        src: production + '/**',
        base: production,
        options: config.options.ftp
    }
};
