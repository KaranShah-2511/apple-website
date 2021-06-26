import React from "react";
import styled from "styled-components";

function Main() {
  return (
    <Container>
      <p>
        Shop now at the Apple Store online with many great ways to buy. Get
        free, no-contact delivery, Specialist help and <span>more</span>
      </p>
    </Container>
  );
}

export default Main;
const Container = styled.div`
  width: 100%;
  height: 30px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 14px;
    padding-top: 8px;
  }

  span {
    color: blue;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    p {
      font-size: 14px;
      font-weight: 100;
    }
  }
`;
