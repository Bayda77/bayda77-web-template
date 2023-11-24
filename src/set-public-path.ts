import { setPublicPath } from "systemjs-webpack-interop";
import appConfig from "./config/app.config.json";

setPublicPath(`@${appConfig.orgName}/${appConfig.context}-${appConfig.appName}`);
