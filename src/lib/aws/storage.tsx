import { Storage } from "aws-amplify";

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

      putDB = { ...putDB, [key]: s3.key };
    } else {
      putDB = { ...putDB, [key]: value };
    }
  }

  db(putDB);
};
