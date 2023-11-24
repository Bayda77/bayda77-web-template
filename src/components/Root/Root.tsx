import React from "react";
import { Provider } from "../../models/Provider";
import App from "../App";
import appConfig from "../../config/app.config.json";
import { StylesProvider, createGenerateClassName, ThemeProvider } from "@material-ui/core/styles";
import { lightTheme } from "@nutrien/cxp-components";

export default function Root(props) {
  //Randomize JSS class names on build to prevent multi app collisions
  const generateClassName = createGenerateClassName({
    productionPrefix: `${appConfig.orgName}-${appConfig.appName}`,
    seed: `${appConfig.orgName}-${appConfig.appName}`,
  });

  return (
    <Provider>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={lightTheme}>
          <App />
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  );
}
