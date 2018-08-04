# Superrrrr-boilerplate
Ready-to-go boilerplate for fast web app building in React. 
- [x] `create-react-app`
- [x] hot reloading
- [x] `normalize.css`
- [x] `redux`
- [x] `sass`
- [x] `prettier`
- [x] `eslint`
- [x] `gulp`
- [x] preorganized top nav and side menu in material

# First things
Install `gulp-cli` globally
```
npm install --g gulp-cli
```

**note**: this boilerplate uses `gulp`@4, not 3.

# What you can do

## Customize configs 
- Travis: `./travis.yml`
- `create-react-app` (webpack): `./config-overrides.js`
- `redux`: `./src/store/index.js`
- `eslint`: `./.eslintrc.js`
- `gulp`: `./gulpfile.js`
- `prettier`: `./.prettier.js`

### Default 
`watch` & `start` together. 
```
gulp (default)
```

### Watch
`sass`/`scss` inside `sass` folder get transpiled to `css`. 
it `prettier`s and `eslints` all `js` files. 
```
gulp watch
```

### Build 
Equivalent to `react-app-rewired build`
```
gulp build
```

### Start 
Equivalent to `react-app-rewired start`
```
gulp start 
```

### Test
Equivalent to `react-app-rewired test`
```
gulp test
```

### Eject
Equivalent to `react-app-rewired eject`
```
gulp eject
```


