import { Storage } from "aws-amplify";
import { config } from "../../lib/config";

export const put = async (
  formData: any,
  success: Function,
  error: Function,
  db: Function
) => {
  let putDB = {};

  for (let [key, value] of formData) {
    if (value instanceof File) {
      const name = `${Date.now()}-${value.name}`;
      const s3 = await Storage.put(name, value, {
        contentType: value.type,
      });

      putDB = {
        ...putDB,
        [key]: {
          bucket: config.s3.BUCKET,
          region: config.s3.REGION,
          key: `public/${s3.key}`,
        },
      };
    } else {
      putDB = { ...putDB, [key]: value };
    }
  }

  db(putDB);
};

export const getImages = async (list: any) => {
  return Promise.all(list.map((param: any) => Storage.get(param.image.key)));
};

export const getImage = async (image: any) => {
  return await Storage.get(image.key);
};

export const getVideo = async (video: any) => {
  return await Storage.get(video.key);
};
