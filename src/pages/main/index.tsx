import React from "react";

import { signOut } from "../../lib/cognito";

const Main = ({ history }: any) => {
  const handleClick = () => {
    signOut();
    history.go(0);
  };

  return (
    <div>
      <div>메인 페이지</div>
      <button onClick={handleClick}>로그아웃</button>
    </div>
  );
};

export default Main;
