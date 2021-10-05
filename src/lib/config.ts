export const config = {
  s3: {
    REGION: process.env.REACT_APP_S3_REGION,
    BUCKET: process.env.REACT_APP_S3_BUCKET_NAME,
  },
  apiGateway: {
    URL: process.env.REACT_APP_GATE_WAY_URL,
    REGION: process.env.REACT_APP_GATE_WAY_REGION,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL,
  },
};
