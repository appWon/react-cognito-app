import styled, { css } from "styled-components";

interface FileContainerType {
  file: string | undefined;
}

interface VideoPreviewButtonType {
  id?: string;
  selectImg?: string;
}

export const AdminMainContainer = styled.div`
  padding: 10px;
`;

export const AdminMainWrap = styled.div``;

export const AdminMainHeader = styled.h1`
  margin-bottom: 10px;
  font-weight: 400;
`;

export const FileDageAndDropContainer = styled.div<FileContainerType>`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  border-radius: 15px;
  border: ${({ file }) => (file ? "none" : "1px solid #8B8B8B")};

  svg {
    width: 50%;
    height: 50%;
    color: #99afdb;
    transform: translateY(-10px);
  }

  video {
    border-radius: 15px;
  }

  ${({ file }) =>
    !file &&
    css`
      &:hover {
        opacity: 0.6;
      }
    `}
`;

export const FileInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 100;
`;

export const FileInputText = styled.h1`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const VideoPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoPreviewH1 = styled.h1`
  margin: 10px 0;
  font-size: 15px;
  font-weight: 500;
`;

export const VideoPreviewCaptureBtn = styled.input`
  width: 100px;
  height: 30px;
  margin: 0 10px;
  background: #99afdb;
  border-radius: 10px;
  border: none;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const VideoPreviewCaptureBtnBig = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 165px !important;
  height: 100px !important;
  background: none;
  border-radius: 15px;
  border: 1px solid #8b8b8b;
  transform: translateX(-150px);
  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
    color: #99afdb;
  }
`;

export const VideoPreviewLabel = styled.label`
  font-size: 13px;
  font-weight: 400;
`;

export const VideoPreviewImgContainer = styled.div`
  margin: 20px 0;
  width: 500px;
  height: auto;
`;

export const VideoPreviewButton = styled.button<VideoPreviewButtonType>`
  width: 165px !important;
  height: 100px !important;
  margin-right: 10px;
  background: none;
  border-radius: 15px;
  border: ${({ id, selectImg }) =>
    id === selectImg ? "2px solid #8B8B8B;" : "1px solid #8B8B8B"};
  opacity: ${({ id, selectImg }) => (id === selectImg ? "1" : "0.6")};

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const VideoPreviewImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 13px;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const DetailHeader = styled.h2`
  margin-bottom: 10px;
  font-weight: 400;
`;

export const DetailTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  border: 1px solid #606060;
  border-radius: 10px;
`;

export const DetailTitleLabel = styled.label`
  font-size: 13px;
  margin-bottom: 10px;
`;

export const DetailTitle = styled.input`
  font-size: 20px;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const VideoUpdateButton = styled.button`
  width: 500px;
  height: 60px;
  margin: 20px 0;
  font-size: 20px;
  background: #99afdb;
  border-radius: 10px;
  border: none;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
