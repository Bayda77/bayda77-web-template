const env = process.env.REACT_APP_ENV;

interface URLs {
  apiGatewayUrl: string;
  rootUrl: string;
}

const devAPIUrls: URLs = {
  apiGatewayUrl: "ENTER DEV URL",
  rootUrl: "",
};

const stagingAPIUrls: URLs = {
    apiGatewayUrl: "ENTER STAGE URL",
    rootUrl: "",
};

const uatAPIUrls: URLs = {
    apiGatewayUrl: "",
    rootUrl: "",
};

const prodAPIUrls: URLs = {
    apiGatewayUrl: "",
    rootUrl: "",
};

let apiConfig = devAPIUrls;

switch (env) {
  case "dev":
    apiConfig = devAPIUrls;
    break;
  case "stage":
    apiConfig = stagingAPIUrls;
    break;
  case "uat":
    apiConfig = uatAPIUrls;
    break;
  case "prod":
    apiConfig = prodAPIUrls;
    break;
  default:
    apiConfig = devAPIUrls;
    break;
}

export { apiConfig };
