## Step 1

> npm init --y

## Step 2

> yarn add react react-dom

## Step 3

> yarn add -D @types/react @types/react-dom typescript

## Step 4

- Added index.html & App.tsx and index.tsx
- Added tsconfig.json file

## Step 5

> yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript

## Step 6

- Added .babelrc file with required settings

## Step 7

- Added webpack
  > yarn add -D html-webpack-plugin webpack webpack-cli webpack-dev-server
- Add babel loader
  > yarn add -D babel-loader

## Step 8

** Fixed below errors **

- Cannot find module '@babel/plugin-transform-runtime'
- Module not found: Error: Can't resolve 'style-loader' in 'D:\Study-Aug2021\react-typescript'
- Module not found: Error: Can't resolve 'css-loader' in 'D:\Study-Aug2021\react-typescript'

## Step 9

- Added & loaded an image file
- Added & loaded an svg file

### Run app in PROD mode

- Build the app

  > yarn build

- Navigate to folder build
  > npx serve
- You can clearly see the bundle.js file size here
  - In Prod mode its less than Dev mode

## Step 10

- Created and used counter component
- Enabled only loading of components which is getting changed
- Added a package
  > yarn add -D @pmmmwh/react-refresh-webpack-plugin
- Fixed Error - Module not found: Error: Can't resolve 'react-refresh/runtime'
  > yarn add -D react-refresh
- Fixed Error
  `ncaught TypeError: SocketClient is not a constructor at initWDSSocket (WDSSocket.js:17) at ./node_modules/@pmmmwh/react-refresh-webpack-plugin`

## Step 11

- Added support for eslint
  > yarn add -D eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser
  > yarn add -D @typescript-eslint/eslint-plugin
- Added
  > yarn add -D eslint-plugin-import eslint-plugin-jsx-a11y
- Added eslint and prettier
- Added husky

## Step 12

- Added copy plugin and bundle analyzer
