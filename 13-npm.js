const _ = require('lodash')
const lis = [1, [2, [3, [4, [5, [6, [7, [8, [9, [0]]]]]]]]]]
console.log(_.flattenDeep(lis))
console.log("Hello World!");
// Basics of npm packages 
// npm global and local packages 
// npm i <package name> for local installation 
// sudo npm install <package name> for global installation
// npm uninstall <package name> for local uninstallation
// sudo npm uninstall <package name> for global uninstallation
// npm list -g for global packages
// npm list -g --depth=0 for deep global packages
// npm list -g --depth=1 for shallow global packages
