declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "capture-video-frame";
