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
