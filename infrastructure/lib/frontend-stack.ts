import { Configuration } from "./configurations";
import * as cdk from "aws-cdk-lib";
import { Tags } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Microfrontend } from "@nutrien/ddc-cdk-lib";
import { Source } from "aws-cdk-lib/aws-s3-deployment";

export class FrontEndStack extends cdk.Stack {
  config: Configuration;

  constructor(scope: Construct, id: string, config: Configuration) {
    super(scope, id, { env: config.env });

    this.config = config;

    const mfe = new Microfrontend(this, `${config.appName.toLowerCase()}-${config.stageName.toLowerCase()}`, {

      bucketName: `${config.appName.toLowerCase()}-${config.stageName.toLowerCase()}`,
      comment: "DDC Template App Distribution",
      sources: [Source.asset("../dist")],
    });

    // Final CloudFront URL
    new cdk.CfnOutput(this, "MFE-stringified", {
      value: mfe.toString(),
    });
  }
}
