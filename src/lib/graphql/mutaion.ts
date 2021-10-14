export const setVideo = /* GraphQL */ `
  mutation($videoName: String!, $videoFile: String!, $imageFile: String!) {
    setVideo(
      input: {
        title: $videoName
        uploadVideo: $videoFile
        uploadImage: $imageFile
      }
    ) {
      title
      uploadVideo
      uploadImage
      id
    }
  }
`;
