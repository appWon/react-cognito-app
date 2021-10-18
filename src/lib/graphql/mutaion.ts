export const setVideo = /* GraphQL */ `
  mutation(
    $videoName: String!
    $level: String!
    $videoFile: S3ObjectInput!
    $imageFile: S3ObjectInput!
  ) {
    setVideo(
      input: {
        title: $videoName
        video: $videoFile
        image: $imageFile
        level: $level
      }
    ) {
      id
    }
  }
`;
