import { genModule } from "@proxtx/combine/combine.js";
import { genCombine } from "@proxtx/combine-rest/request.js";
import config from "@proxtx/config";

const fileApi = await genCombine(
  config.Motion.api + "/",
  "public/file.js",
  genModule
);

export class Info {
  async info() {
    let file = await fileApi.nextIndexFile(config.Motion.pwd);
    return {
      element: "title-box-io",
      title: "Latest Video",
      contains: {
        element: "video-io",
        src: config.Motion.api + "/../file.route?perm=" + file.perm,
      },
    };
  }
}
