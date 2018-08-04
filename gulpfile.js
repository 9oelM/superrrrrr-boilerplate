/*import gulp from 'gulp'
import run from 'gulp-run-command'
import prettierEslint from 'gulp-prettier-eslint'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import prettierrc from './prettierrc'
import eslintrc from './eslintrc'*/

let gulp = require("gulp"),
  run = require("gulp-run-command").default,
  prettierEslint = require("gulp-prettier-eslint"),
  sass = require("gulp-sass"),
  sourcemaps = require("gulp-sourcemaps"),
  prettierrc = require("./prettierrc"),
  eslintrc = require("./eslintrc");

/*
    customize your paths to get it working.
*/
const paths = {
  js: "./src/**/*.js",
  sass: {
    src: "./src/styles/sass/",
    master: "./src/styles/sass/master.sass",
    dest: "./src/styles/css/"
  }
};

/*
    see https://github.com/prettier/prettier-eslint for options
*/
const pretterEslintOpts = {
  /*
    The config to use for formatting with ESLint. Can be overridden with filePath.
    */
  eslintConfig: eslintrc,
  /*
    The options to pass for formatting with prettier. If not provided, prettier-eslint will attempt to create the options based on the eslintConfig (whether that's provided or derived via filePath). You can also provide some of the options and have the remaining options derived via your eslint config. This is useful for options like parser.

    NOTE: these options override the eslint config. If you want fallback options to be used only in the case that the rule cannot be inferred from eslint, see "fallbackPrettierOptions" below.
    */
  prettierOptions: prettierrc,
  /*
    The options to pass for formatting with prettier if prettier-eslint is not able to create the options based on the the eslintConfig (whether that's provided or derived via filePath). These options will only be used in the case that the corresponding eslint rule cannot be found and the prettier option has not been manually defined in prettierOptions. If the fallback is not given, prettier-eslint will just use the default prettier value in this scenario.
    */
  fallbackPrettierOptions: {
    singleQuote: false
  }
};

function formatAndLint(opts) {
  return function formatAndLintCurried(opts) {
    return gulp
      .src(paths.js, { base: "./" })
      .pipe(prettierEslint(opts))
      .pipe(gulp.dest("./"));
  };
}

function compileSass() {
  return gulp
    .src(paths.sass.master)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.sass.dest));
}

/*
    npm commands. you can pass in options as a second argument to the run function.
    see more: https://github.com/Klathmon/gulp-run-command#readme
*/
function start() {
  return run("react-app-rewired start");
}

function build() {
  return run("react-app-rewired build");
}

function test() {
  return run("react-app-rewired test --env=jsdom");
}

function eject() {
  return run("react-scripts eject");
}

/*
    generic functions
*/

function watch() {
  gulp.watch(paths.js, formatAndLint(pretterEslintOpts));
  gulp.watch(paths.sass.src, compileSass);
}

const _build = gulp.series(
  formatAndLint(pretterEslintOpts),
  compileSass,
  build()
);

/*
    tasks
*/
exports.watch = watch;
exports.build = _build;
exports.start = start();
exports.test = test();
exports.eject = eject();
exports.default = gulp.parallel(watch, start())
