module.exports = function(grunt) {

    /*=============================================
    =            LOAD GRUNT PLUGINS               =
    =============================================*/
    //Compile Sass to CSS using Compass
    grunt.loadNpmTasks('grunt-contrib-less');
    //Concaténation des fichiers JS/CSS
    grunt.loadNpmTasks('grunt-contrib-concat');
    //Minification JS
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //Minification des fichiers css
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //Surveille les changements de fichiers
    grunt.loadNpmTasks('grunt-contrib-watch');


    /*=====================================
    =            CONFIGURATION            =
    =====================================*/
    //Liste des fichiers js à concaténer
    var jsSrc = [
            'librairies/jquery/dist/jquery.min.js',
            'librairies/bootstrap/js/dropdown.js',
            'librairies/bootstrap/js/button.js',
            'librairies/bootstrap/js/collapse.js',
            'librairies/bootstrap/js/carousel.js',
            'scripts/scripts.js'
        ],
        jsDist = '../web/js/scripts.js';

    //Liste des fichiers css des librairies
    var cssSrc = [
            'css/main.css'
        ],
        cssDist = '../web/css/styles.css';


    /*=====================================
    =           CONFIGURE GRUNT           =
    =====================================*/
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // compile less stylesheets to css
        less: {
            options: {
                // modification chemin des fonts bootstrap
                modifyVars: {
                    'icon-font-path': '"fonts/"',
                },
            },
            build: {
                files: {
                    'css/main.css': 'less/*.less'
                }
            }
        },

        //Config de la concaténation des fichiers
        concat: {
            js: {
                src: jsSrc,
                dest: jsDist
            },
            css: {
                src: cssSrc,
                dest: cssDist
            }
        },

        // minification CSS
        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    '../web/css/styles.css': ['../web/css/styles.css']
                }
            }
        },

        // minification JS
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    '../web/js/scripts.min.js': ['librairies/jquery/dist/jquery.min.js', 'scripts/scripts.js', ]
                }
            },
        },

        // surveille les modifications sur les fichiers
        watch: {
            options: {
                livereload: true,
            },
            styles: {
                files: 'less/*.less',
                tasks: ['less:build', 'concat:css']
            },
            scripts: {
                files: 'scripts/*.js',
                tasks: ['concat:js']
            },
        }

    });


    /*=============================
    =            BUILD            =
    =============================*/
    // Par defaut la commande grunt compile les fichiers LESS, concatene les fichiers javascript
    // et CSS et regarde si ça bouge
    grunt.registerTask('default', ['less:build', 'concat:js', 'concat:css', 'watch']);
    // La commande grunt prod compile les fichiers LESS, minifie les fichiers javascript et les concatene,
    // concatene les fichiers CSS et minifie le tout
    grunt.registerTask('prod', ['less:build', 'uglify:build', 'concat:css', 'cssmin:minify']);

};
