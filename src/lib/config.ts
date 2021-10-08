export const config = {
  s3: {
    REGION: process.env.REACT_APP_S3_REGION,
    BUCKET: process.env.REACT_APP_S3_BUCKET_NAME,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL,
  },
  appSync: {
    endPoint: process.env.REACT_APP_END_POINT,
    region: process.env.REACT_APP_APP_SYNC_REGION,
    appSyncAuthType: process.env.REACT_APP_APP_SYNC_AUTH_TYPE,
  },
};
