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
- Added the settings, if the source and destination folder does not exists - no error would be shown to user

## Step 13: Add Scss loader

- Configured node-sass and sass-loader,
- Reason to not install `sass` and choose `node-sass` is `node-sass` is faster. About 7 times faster.
  https://www.peterbe.com/plog/quick-comparison-between-sass-and-node-sass

## Step 14: Extract CSS Into Its Own File

- Added mini css extract support
  > yarn add -D mini-css-extract-plugin
- Setup the loader in webpack config file

## Step 15: Added support for hashing, Cleaning the build contents, manifest

- Adding manifest
  > yarn add -D webpack-manifest-plugin

## Errors

1. Occurs if the file is in use by local server
   `Error: EPERM: operation not permitted, scandir 'D:/Study-Aug2021/react-typescript/build/4a44e02494479c250262.png'`

# Folder Structure

A react project structure or architecture plays an important role in project maintenance. A good folder structure will help developers in the team easy to locate and easy to relate.

React ecosystem give freedom to developers to structure react project. We can structure it as we like.

However, if you're just starting a medium-to-large scale react project, it can be confusing to structure the project properly so that your team can easy to maintain it later.

### Assets Folder

- Contains images, svgs & shared scss styles
- Will keep style partaining to each components

### Components Folders [Reusable, standalone]

- The components folder contains a collection of UI components like button, custom input field, modal, etc that will be shared and used across files in the project.
- You can rename it to 'elements' or 'UIs' if you dont like 'components'.
- Each component has a test file to help us maintain them because they used widely in the project.

### Pages Folder [Routers]

- The pages folder reflects the routes of the application. Each component inside this folder has its own route.

- A page component will contain children from components folder, domains folder, or its own subfolder. It has its own state, and usually call some services as well.

## Domain Folder

- It contains components related to business functionality that used in the pages.
- II would use the components/ folder only for reusable components (e.g. UI components). Every other component should move to a domain centred folder.

## Services Folder

- Inspired by Angular architecture
- It simply a javascript function to manage API integration based on the type of data.
- Code related to websockets

## Store Folder

- Used for redux

## Utils Folder

The utils folder is just a place to locate some utility functions that used repeatedly in the project. Files in the utils folder should only contain some functions like date formatting, string conversion, etc.

## Models folder

- To keep shared typescripts interfaces
