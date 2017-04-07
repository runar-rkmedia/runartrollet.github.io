/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            pictures: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: '100',
                        height: 100,
                        quality: 60,
                    }, {
                        name: '300',
                        height: 300,
                        quality: 60,
                    }, {
                        name: '400',
                        width: 400,
                        quality: 60,
                    }, {
                        name: '800',
                        width: 800,
                        quality: 60,
                    }, {
                        name: '1600',
                        width: 1600,
                        quality: 80,
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'images_src/',
                    dest: 'images/'
                }]
            },
            icons: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: '100',
                        height: 100,
                        width: 100,
                        quality: 60,
                        aspectRatio: false,
                        gravity: 'NorthWest'
                    }, {
                        name: '300',
                        height: 300,
                        width: 300,
                        quality: 60,
                        aspectRatio: false,
                        gravity: 'NorthWest'
                    }, {
                        name: '400',
                        height: 400,
                        width: 400,
                        quality: 60,
                        aspectRatio: false,
                        gravity: 'NorthWest'
                    }, {
                        name: '800',
                        height: 800,
                        width: 800,
                        quality: 60,
                        aspectRatio: false,
                        gravity: 'NorthWest'
                    }, {
                        name: '1600',
                        height: 1600,
                        width: 1600,
                        quality: 80,
                        aspectRatio: false,
                        gravity: 'NorthWest'
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'images_src/icons/',
                    dest: 'images/'
                }]
            },
        },

        /* Clear out the images directory if it exists */
        clean: {
            dev: {
                src: ['images'],
            },
        },

        /* Generate the images directory if it is missing */
        mkdir: {
            dev: {
                options: {
                    create: ['images']
                },
            },
        },

        /* Copy the "fixed" images that don't go through processing into the images/directory */
        copy: {
            fixed: {
                files: [{
                    expand: true,
                    src: 'images_src/fixed/*.{gif,jpg,png,svg}',
                    flatten: true,
                    dest: 'images/fixed'
                }]
            },
            dev: {
                files: [{
                    expand: true,
                    src: 'images_src/*.{gif,jpg,png}',
                    flatten: true,
                    dest: 'images/'
                }]
            },
            icons: {
                files: [{
                    expand: true,
                    src: 'images_src/icons/*.{gif,jpg,png}',
                    flatten: true,
                    dest: 'images/'
                }]
            },
        },
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
