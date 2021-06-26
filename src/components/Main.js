import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Extra from "./Extra";
import Groupimage from "./Groupimage";

function Main() {
  return (
    <Container>
      <Extra />
      <Section
        title="iPod Pro"
        description="Supercharged by the Apple M1 chip."
        backgroundImg="img2.png"
        forntcolor="white"
        price=""
        mobileImg="mobile_img2.png"
      />

      <Section
        title="iPhone 12 "
        description="Blast past fast. "
        backgroundImg="img3.jpg"
        forntcolor="black"
        price="From ₹69900* before trade-in"
        mobileImg="mobile_img3.png"
      />

      <Section
        title="iMac"
        description="Say hello"
        backgroundImg="img1.png"
        forntcolor="black"
        price=""
        mobileImg="mobile_img1.png"
      />

      <Groupimage
        lefttitle="Privacy.That's iPhone"
        righttitle="./images/apple_watch.png"
        leftdescription=""
        rightdescription="The future of health is on your wrist."
        backgroundImg=""
        forntcolor="white"
        price=""
        leftlearnmore="Learn More"
        leftbuy=""
        rightlearnmore="Learn More"
        rightbuy="Buy"
      />
      {/* <Groupimage />
      <Groupimage /> */}
    </Container>
  );
}

export default Main;
const Container = styled.div`
  width: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;
