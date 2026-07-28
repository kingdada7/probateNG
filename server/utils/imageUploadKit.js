import imagekit from "../config/imagekit.js";

export const uploadToImageKit = async (file, folder) => {
  const result = await imagekit.upload({
    file: file.buffer,
    fileName: `${Date.now()}-${file.originalname}`,
    folder,
    useUniqueFileName: true,
  });

  return result.url;
};
