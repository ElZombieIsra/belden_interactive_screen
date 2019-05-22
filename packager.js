const packager = require('electron-packager')
packager({
    'dir': '.'
})
  .then(appPaths => { console.log(appPaths) });