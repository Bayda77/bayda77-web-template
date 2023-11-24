# student-api-template for 
Web React Template for Co-ops Students training 

> **⚠️ NOTE**
>
> **This version uses *Webpack 5***

Features:

- Webpack Support
- Typescript (.ts)
- React Typescript Components (.tsx)
- Babel 7
 
## Configuration

To configure your app update the `app.config.json` file inside of the `src/config` folder with your `orgName`, `appName` and `context`. These names will be used to bundle your application with webpack and will dictate the name of your final application bundle.

For Example:

`app.config.json`

```json
{
  "orgName": "nutrien",
  "appName": "web-template",
  "context": "students"
}
```

## Setup and Add this template to the Platform Orchestrator

> **⚠️ NOTE**
>
> Make sure you are using the right Webpack version (V4, V5)

1. Use this repo as a template repo when creating a new repo in Github
2. Clone the new repo locally.
3. Update the `src/config/app.config.json` file with the correct `appName` and `context`.
   - The `appName` is the name of the app and should end in -app.
   - The `context` should be either cxp or dxp.
4. Set the local port of the application in both the `package.json` and `webpack.config.js` files.

## Deploy this template

1. Use this repo as a template repo when creating a new repo in Github
2. 
   - In case you want to deploy as a Standalone project
     - Update the `.circleci/config.yml` file replacing the line `npm run build:$ENV` to `npm run build:standalone:$ENV`.
   - In case you want to deploy as a Standalone project
     - Update the `.circleci/config.yml` file replacing the line `npm run build:standalone:$ENV` to `npm run build:$ENV`.

npm run build:$ENV