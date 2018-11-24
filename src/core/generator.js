import fs from "fs-extra";

export const TEST_ME = "TEST STRING";

export function createComponentsNavFile(config, navArray) {
  const fileName = "components-nav.json";
  try {
    fs.outputFileSync(
      `${config.jsonDir}/${fileName}`,
      JSON.stringify(navArray),
      "utf8"
    );
  } catch (e) {
    console.log("Cannot write file ", e);
  }
}
