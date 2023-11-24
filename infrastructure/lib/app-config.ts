import { Configuration } from "./configurations";

import appConfig from "../../src/config/app.config.json";
const appName = `${appConfig.orgName}-${appConfig.appName}`;

const commonTags = [
  { key: "application", value: "Hello Nutrien" },
  {
    key: "department-functionalarea",
    value: "sales and tdl-sales tdl and ibp",
  },
  { key: "pipeline", value: "students-web-template" },
];

export const configurations: { [key: string]: Configuration } = {
  ["dev"]: {
    appName,
    stageName: "dev",
    vpcId: "vpc-0152f6922ab317ffe",
    providerArn:
      "arn:aws:cognito-idp:us-east-2:840375332198:userpool/us-east-2_QNW2FlS0K",
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
    },
    context: appConfig.context,
    cacheControlLambdaVersionArn:
      "arn:aws:lambda:us-east-1:840375332198:function:ddc-cache-control",
    projectTags: [...commonTags, { key: "environment", value: "dev" }],
  },
  ["stage"]: {
    appName,
    stageName: "stage",
    vpcId: "vpc-0152f6922ab317ffe",
    providerArn:
      "arn:aws:cognito-idp:us-east-2:840375332198:userpool/us-east-2_jEIys39Ub",
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
    },
    context: appConfig.context,
    cacheControlLambdaVersionArn:
      "arn:aws:lambda:us-east-1:840375332198:function:ddc-cache-control-stage",
    projectTags: [...commonTags, { key: "environment", value: "stage" }],
  },
  ["uat"]: {
    appName,
    stageName: "uat",
    vpcId: "vpc-02c2dfb316a0115d1",
    providerArn:
      "arn:aws:cognito-idp:us-east-2:620164077820:userpool/us-east-2_cupM6yNkc",
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
    },
    context: appConfig.context,
    cacheControlLambdaVersionArn:
      "arn:aws:lambda:us-east-1:620164077820:function:cxp-cache-control:1",
    projectTags: [...commonTags, { key: "environment", value: "uat" }],
  },
  ["prod"]: {
    appName,
    stageName: "prod",
    vpcId: "vpc-00fa34336fcbd0ccd",
    providerArn:
      "arn:aws:cognito-idp:us-east-2:475979636662:userpool/us-east-2_XEaLQx09U",
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
    },
    context: appConfig.context,
    cacheControlLambdaVersionArn:
      "arn:aws:lambda:us-east-1:475979636662:function:cxp-cache-control:1",
    projectTags: [...commonTags, { key: "environment", value: "prod" }],
  },
};
