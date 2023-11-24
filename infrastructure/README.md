# Configure Your App

Set the `cloudFrontId` in `infrastructure/lib/app-config.ts` to the CloudFront ID for each environment to allow for automatic invalidation on updates to the s3 bucket.

# Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
