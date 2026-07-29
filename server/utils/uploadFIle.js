import fs from "fs";
import { toFile } from "@imagekit/nodejs";
// import your imagekit instance

export const uploadFile = async (file) => {
  const buffer = fs.readFileSync(file.path);

  const response = await imagekit.files.upload({
    file: await toFile(buffer, file.originalname),
    fileName: file.originalname,
    folder: "/uploads",
  });

  // Delete the temporary file
  fs.unlinkSync(file.path);

  return imagekit.helper.buildSrc({
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    src: response.filePath,
    transformation: [
      {
        width: 1280,
        height: 800,
        crop: "maintain_ratio",
        quality: "auto",
        format: "webp",
      },
    ],
  });
};
