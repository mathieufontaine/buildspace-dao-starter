import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0xc6a66F027c883557358FE3aF7708DE41265B1a21"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Green Heart",
        description: "This NFT will give you access to EarthDAO!",
        image: readFileSync("scripts/assets/green-heart.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
