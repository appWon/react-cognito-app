import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./style.service";

import { Icon1, Icon2 } from "../../assets/images";

interface ServicesType {
  id: string;
}

const Services: React.FC<ServicesType> = (props) => {
  return (
    <ServicesContainer id={props.id}>
      <ServicesH1>다른 서비스</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>aws</ServicesH2>
          <ServicesP>aws를 이용한 서비스</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>동영상</ServicesH2>
          <ServicesP>동영상 자체 관리</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>서비스</ServicesH2>
          <ServicesP>쉬운 관리</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
