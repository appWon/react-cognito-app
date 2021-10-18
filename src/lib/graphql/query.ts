export const getVideoList = /* GraphQL */ `
  query getVideoList {
    getVideo {
      items {
        id
        title
        createdDate
        image {
          bucket
          key
          region
        }
      }
    }
  }
`;
