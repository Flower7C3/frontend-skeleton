# Frontend skeleton with Gulp.js

## Installation

Clone the repository on your computer, change into the projects folder and install autmatic or manual.

### Automatic

1. Install [Vagrant](http://docs.vagrantup.com/v2/installation/index.html), [Virtualbox](https://www.virtualbox.org/wiki/Downloads) and [Ansible](http://docs.ansible.com/intro_installation.html).
2. bring virtual machine up  `vagrant up`
3. connect to it `vagrant ssh`
4. go to project directory `cd /vagrant`
5. view project
 - prepare development with `gulp` and [open web browser](http://192.168.33.99:9999) or
 - prepare production with `gulp publish` and [open web browser](http://192.168.33.99:9998)

### Manual

1. Install meta software before developing:
    - packages: [npm](https://www.npmjs.com/package/npm), [ruby], [bundler](http://bundler.io/), fontforge
            sudo apt-get install nodejs-legacy ruby bundler fontforge
    - npm modules: [bower](http://bower.io/#install-bower), [gulp](http://gulpjs.com/)
            sudo npm install -g bower gulp
    - ruby gems: [sass](http://sass-lang.com/install), [fontcustom](http://fontcustom.com/#installation)
            wget http://people.mozilla.com/~jkew/woff/woff-code-latest.zip && unzip woff-code-latest.zip -d sfnt2woff && cd sfnt2woff && make && sudo mv sfnt2woff /usr/local/bin/ && cd .. && rm -rf sfnt2woff/ && rm -rf woff-code-latest.zip
        sudo gem install sass fontcustom
2. Prepare project.
        bundle
        bower install
        npm install
**Hint**: If you get errors while installing `gulp-imagemin` it may help to execute this command before running `npm install`:
```sh
export PKG_CONFIG_PATH=/opt/X11/lib/pkgconfig
```

---
## Setup

Change settings in `config/config.js`, `config/jekyll.yml` and `config/jekyll.prod.yml`. Create `config/auth-ftp.js` and/or `config/auth-rsync.js` files if needed.
Create Your app in `app/` directory.

---
## Running Gulp.js

Three tasks are available:
- `gulp` will start a development server, build assets and the Jekyll site and start a `watch` task.
- `gulp publish` will copy and optimize assets and run a production build of Jekyll.
- `gulp deploy` will copy the generated files with Rsync to your server.

---
## Credits

These are the files for *Introduction to Gulp.js* published on [stefanimhoff.de](http://stefanimhoff.de/) website (avalible also on [Github](https://github.com/kogakure/gulp-tutorial)).

This tutorial includes some files for demonstation purposes:

- The [Gulp.js logo](http://gulpjs.com/) used as image example
- The pattern [Light gray](http://subtlepatterns.com/light-fray/) by [Brenda Lay](http://poisones.tumblr.com/), published on [Subtle Patterns](http://subtlepatterns.com/)
- The SVGs and PNGs are take from the [IcoMoon Icon Pack](https://icomoon.io/#icons-icomoon).
