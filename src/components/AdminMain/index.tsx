import React, { useRef } from "react";
import {
  AdminMainContainer,
  AdminMainHeader,
  AdminMainWrap,
  FileDageAndDropContainer,
  FileInput,
  FileInputText,
  VideoPreviewContainer,
  VideoPreviewH1,
  VideoPreviewCaptureBtn,
  VideoPreviewCaptureBtnBig,
  VideoPreviewImgContainer,
  VideoPreviewLabel,
  VideoPreviewButton,
  VideoPreviewImg,
  DetailContainer,
  DetailHeader,
  DetailTitleContainer,
  DetailTitleLabel,
  DetailTitle,
  VideoUpdateButton,
} from "./style.adminMain";
import { CloudUpload, AddToPhotos } from "@material-ui/icons";
import captureVideoFrame from "capture-video-frame";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AdminMain: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [file, setFile] = React.useState<undefined | string>("");
  const [previewImgs, setPreviewImgs] = React.useState<string[]>([]);
  const [selectImg, setSelectImg] = React.useState<string>("");

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    setFile(url);
  };

  const handleUpLoad = () => {
    if (!videoRef.current) return;
    const { dataUri } = captureVideoFrame(videoRef.current, "png");

    setPreviewImgs([...previewImgs, dataUri]);
  };

  return (
    <AdminMainContainer>
      <AdminMainWrap>
        <AdminMainHeader>동영상 업로드</AdminMainHeader>
        <FileDageAndDropContainer file={file}>
          {file ? (
            <video
              ref={videoRef}
              className="VideoInput_video"
              width="100%"
              controls
              src={file}
            />
          ) : (
            <>
              <CloudUpload />
              <FileInput type="file" onChange={handleFileChange} />
              <FileInputText>드래그 & 클릭</FileInputText>
            </>
          )}
        </FileDageAndDropContainer>
        <VideoPreviewContainer>
          <VideoPreviewH1>
            미리보기 이미지
            <VideoPreviewCaptureBtn
              type="button"
              value="이미지 생성"
              onClick={handleUpLoad}
            />
          </VideoPreviewH1>
          <VideoPreviewLabel>
            동영상의 내용을 알려주는 사진을 선택하거나 업로드하세요. 동영상을
            일시정지 후 캡처 버튼을 누른 후 선택해주세요.
          </VideoPreviewLabel>
          <VideoPreviewImgContainer>
            <Slider
              focusOnSelect={true}
              slidesToShow={2}
              slidesToScroll={1}
              centerMode={true}
              speed={500}
              dots={true}
              infinite={previewImgs.length > 1}
            >
              {previewImgs.length ? (
                previewImgs.map((img, index) => (
                  <VideoPreviewButton
                    key={`preview_${index}`}
                    id={`preview_${index}`}
                    selectImg={selectImg}
                    onClick={() => setSelectImg(`preview_${index}`)}
                  >
                    <VideoPreviewImg src={img} alt={`preview_${index}`} />
                  </VideoPreviewButton>
                ))
              ) : (
                <VideoPreviewCaptureBtnBig onClick={handleUpLoad}>
                  <AddToPhotos />
                  <VideoPreviewLabel>이미지 생성</VideoPreviewLabel>
                </VideoPreviewCaptureBtnBig>
              )}
            </Slider>
          </VideoPreviewImgContainer>
          <DetailContainer>
            <DetailHeader>상세정보</DetailHeader>
            <DetailTitleContainer>
              <DetailTitleLabel>제목(필수 항목)</DetailTitleLabel>
              <DetailTitle placeholder="동영상 제목을 입력해 주세요" />
            </DetailTitleContainer>
          </DetailContainer>
          <VideoUpdateButton>업로드 하기</VideoUpdateButton>
        </VideoPreviewContainer>
      </AdminMainWrap>
    </AdminMainContainer>
  );
};

export default AdminMain;
