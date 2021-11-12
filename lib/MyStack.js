import * as sst from "@serverless-stack/resources";
import * as cdk from "@aws-cdk/core";

export default class MyStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const site = new sst.StaticSite(this, "Site", {
      path: "frontend",
      errorPage: "404.html",
      buildOutput: "public",
      buildCommand: "npm run build",
    });

    // Show the endpoint in the output
    this.addOutputs({
      URL: site.url,
    });
  }
}
