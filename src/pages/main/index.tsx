import React from "react";
import Navbar from "../../components/Navbar";
import Sidbar from "../../components/Sidebar";
import HeroSection from "../../components/HeroSection";
import InfoSection from "../../components/InfoSection";
import Services from "../../components/Services";
import Footer from "../../components/Footer";

import { Icon1, Icon2 } from "../../assets/images";

const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Cognito",
  headline: "AWS를 활용한 서비스",
  description:
    "모든 데이터를 AWS에서 관리하고 있어 이용한 만큼 요금 지불하면 되는 서비스",
  buttonLabel: "Get started",
  imgStart: false,
  img: Icon1,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "간단한 서비스",
  headline: "장소에 상관없이 어디서나",
  description:
    "언제 어디서나 간단히 핸드폰, 컴퓨터로 자신만의 데이터를 관리할 수 있습니다.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: Icon2,
  alt: "Piggybank",
  dark: false,
  primary: false,
  darkText: true,
};

const HomeSerVice = {
  id: "otherServices",
};

const Main: React.FC = ({ history }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidbar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services {...HomeSerVice} />
      <Footer />
    </div>
  );
};

export default Main;
