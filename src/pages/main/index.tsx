import React from "react";

import { signOut } from "../../lib/cognito";

import Navbar from "../../components/Navbar";
import Sidbar from "../../components/Sidebar";
import HeroSection from "../../components/HeroSection";
import InfoSection from "../../components/InfoSection";

const Main = ({ history }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    console.log(123);

    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    signOut();
    history.go(0);
  };

  return (
    <div>
      <Sidbar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection />
      <div>메인 페이지</div>
      {/* <button onClick={handleClick}>로그아웃</button> */}
    </div>
  );
};

export default Main;
