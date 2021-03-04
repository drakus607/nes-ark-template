import React from "react";
import styled from "styled-components";
import VipPackage from "./Packages/VipPackage";

const StyledDiv = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const VIP_PKGS = [
  {
    id: "Whitelist",
    title: "Whitelist",
    imgurl:
      "https://res.cloudinary.com/ddq7mrhkh/image/upload/v1614779667/nes-ark-template/pngkey.com-png-test-671833_hbzmpx.webp",
    element: "p",
    description:
      "Dzięki tej nagrodzie, zostaniesz dodany do whitelist na naszym serwerze i będzie na Ciebie czekać zawsze wolny slot aby się połączyć.",
    price: 15,
  },
  {
    id: "VIP",
    title: "VIP Standard",
    imgurl:
      "https://res.cloudinary.com/ddq7mrhkh/image/upload/q_45/v1614779667/nes-ark-template/pngkey.com-vip-png-455790_bjjzk1.webp",
    element: "p",
    description: "VIP Standard lorem ipsum",
    price: 30,
  },
  {
    id: "Super VIP",
    title: "Super VIP",
    imgurl:
      "https://res.cloudinary.com/ddq7mrhkh/image/upload/q_45/v1614793493/nes-ark-template/pngkey.com-vip-png-3390019_dgzvqr.webp",
    element: "p",
    description:
      "Dzięki tej nagrodzie, dostaniesz XXXXX z item shopu, ileś pkt na godzinę i prestiżowy badge",
    price: 45,
  },
];

const vipList = VIP_PKGS.map((pkg) => {
  return (
    <VipPackage
      key={pkg.id}
      title={pkg.title}
      imgtitle={pkg.title}
      imgurl={pkg.imgurl}
      element={pkg.element}
      description={pkg.description}
      price={pkg.price}
    />
  );
});

const CoinsSection = () => {
  return <StyledDiv className="container">{vipList}</StyledDiv>;
};

export default CoinsSection;
