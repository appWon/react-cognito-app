import React from "react";
import { put } from "../../lib/aws/storage";
import { setVideo } from "../../lib/graphql/mutaion";

import { API, graphqlOperation } from "aws-amplify";

interface UploadData {
  videoName: string;
  videoFile: string;
  imageFile: string;
}

const AdminUpload = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const imageRef = React.useRef<HTMLImageElement>(null);

  // 비디오 파일 렌더링 함수
  const handleChangeVideo = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (!target.value) return;
    if (target.files![0].size > 10000000) {
      alert("10MB 이상의 영상을 업로드할 수 없습니다.");
      return;
    }

    videoRef.current!.src = URL.createObjectURL(target.files![0]);
  };

  // 이미지 파일 렌더링 함수
  const handleChangeImage = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (!target.value) return;

    imageRef.current!.src = URL.createObjectURL(target.files![0]);
  };

  //   업로드 함수
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget);

    const success = () => {
      alert("업로드가 완료 되었습니다.");
    };
    const error = (err: any) => {
      console.log(err);
    };
    const putDB = async (data: UploadData) => {
      await API.graphql(graphqlOperation(setVideo, data));
    };

    put(formdata.entries(), success, error, putDB);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>비디오 파일</label>
        <input type="file" name="videoFile" onChange={handleChangeVideo} />
        <video ref={videoRef} controls></video>
      </div>
      <div>
        <label>이미지 파일</label>
        <input type="file" name="imageFile" onChange={handleChangeImage} />
      </div>
      <div>
        <label>이미지 파일</label>
        <input
          type="text"
          name="videoName"
          placeholder="제목을 입력해 주세요"
        />
        <img ref={imageRef} alt="Thumbnail" />
      </div>
      <input type="submit" value="업로드 버튼" />
    </form>
  );
};

export default AdminUpload;
