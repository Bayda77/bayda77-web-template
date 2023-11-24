import "source-map-support/register";
import { FrontEndStack } from "./frontend-stack";
import * as cdk from "aws-cdk-lib";
import { configurations } from "./app-config"; // Update this file to change your app
import { RemovalPolicyDestroyAspect } from "./removal-policy-destroy-aspect";

const app = new cdk.App();
const buildEnvironment = (app.node.tryGetContext("env") || "dev")
  .trim()
  .toLowerCase();
const config = configurations[buildEnvironment];
new FrontEndStack(
  app,
  `Nutrien-${config.context}-${config.appName}-${config.stageName}`,
  config
);

cdk.Aspects.of(app).add(new RemovalPolicyDestroyAspect());

config.projectTags.forEach((tag) => cdk.Tags.of(app).add(tag.key, tag.value));
