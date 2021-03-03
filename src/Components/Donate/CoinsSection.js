import React from "react";
import styled from "styled-components";
// import VipPackage from "./Packages/VipPackage";
import PointsPackage from "./Packages/PointsPackage";

const StyledDiv = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const COIN_PKGS = [
  {
    id: "small",
    title: "50 monet",
    imgurl:
      "https://res.cloudinary.com/ddq7mrhkh/image/upload/c_scale,f_auto,q_46,w_600/v1614767127/nes-ark-template/pngkey.com-money-falling-png-29404_kmuupr.png",
    element: "p",
    description: "50 monet do wydania w naszym sklepiku.",
  },
  {
    id: "medium",
    title: "150 monet",
    imgurl:
      "https://res.cloudinary.com/ddq7mrhkh/image/upload/c_scale,f_auto,q_35,w_800/v1614767129/nes-ark-template/pngkey.com-money-falling-png-26676_ch2vkw.webp",
    element: "p",
    description: "150 monet do wydania w naszym sklepiku.",
  },
  {
    id: "huge",
    title: "400 monet",
    imgurl:
      "https://res.cloudinary.com/ddq7mrhkh/image/upload/c_scale,f_auto,q_35,w_800/v1614767124/nes-ark-template/pngkey.com-pile-of-gold-png-1598541_exdnph.webp",
    element: "p",
    description: "400 monet do wydania w naszym sklepiku.",
  },
];

const coinList = COIN_PKGS.map((pkg) => {
  return (
    <PointsPackage
      key={pkg.id}
      title={pkg.title}
      imgtitle={pkg.title}
      imgurl={pkg.imgurl}
      element={pkg.element}
      description={pkg.description}
    />
  );
});

const CoinsSection = () => {
  return <StyledDiv className="container">{coinList}</StyledDiv>;
};

export default CoinsSection;
