import { Storage } from "aws-amplify";
import { AnyLengthString } from "aws-sdk/clients/comprehend";
import { config } from "../../lib/config";

export const put = async (
  formData: any,
  success: Function,
  error: Function,
  db: Function
) => {
  let putDB = {};

  for (let [key, value] of formData.entries()) {
    if (value instanceof File) {
      const name = `${Date.now()}-${value.name}`;
      const s3 = await Storage.put(name, value, {
        contentType: value.type,
        level: formData.get("level"),
      });

      putDB = {
        ...putDB,
        [key]: {
          bucket: config.s3.BUCKET,
          region: config.s3.REGION,
          key: s3.key,
        },
      };
    } else {
      putDB = { ...putDB, [key]: value };
    }
  }

  db(putDB);
};

export const getImages = async (list: any) => {
  return Promise.all(
    list.map((param: any) =>
      Storage.get(param.image.key, { level: "public" }).then((image) => {
        return {
          id: param.id,
          title: param.title,
          createdDate: param.createdDate,
          image,
        };
      })
    )
  );
};

export const getImage = async (image: any) => {
  return await Storage.get(image.key, { level: "public" });
};

export const getVideo = async (video: any) => {
  return await Storage.get(video.key, { level: "public" });
};
