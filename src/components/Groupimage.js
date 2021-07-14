import React from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
function Groupimage({
  lefttitle,
  righttitle,
  rightdescription,
  leftlearnmore,
  rightlearnmore,
  rightbuy,
}) {
  return (
    <Container>
      <LeftSide>
        <h1>{lefttitle}</h1>

        <Details>
          <span>
            <a>{leftlearnmore}</a>
          </span>
        </Details>
      </LeftSide>
      <RightSide>
        <h1>
          <img id="apple" src={righttitle} />
        </h1>
        <p>{rightdescription}</p>
        <Details>
          <span>
            <a>
              {rightlearnmore}
              <ArrowForwardIosIcon />
            </a>
          </span>
          <span>
            <a>
              {rightbuy} <ArrowForwardIosIcon />
            </a>
          </span>
        </Details>
      </RightSide>
    </Container>
  );
}

export default Groupimage;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const LeftSide = styled.div`
  height: 80vh;
  width: 50%;
  float: left;
  background-size: cover;
  background-position: center;
  margin-top: 2px;
  background-repeat: no-repeat;
  padding: 10px;
  background-image: url("./images/product1.png");
  border: 6px solid white;
  justify-content: center;
  text-align: center;

  h1 {
    color: white;
    padding-top: 20px;
    font-size: 40px;

    #apple {
      width: 100px;
      height: 100px;
    }
  }
  span {
    margin-top: -20px;
    a {
      color: #06c;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 65vh;
    border: 2px solid white;
    justify-content: center;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 30px;
      margin-top: -430px;
    }
    span {
      margin-top: 0px;
    }
  }
`;

const RightSide = styled.div`
  height: 80vh;
  width: 50%;
  float: right;
  background-size: cover;
  background-position: center;
  margin-top: 2px;
  background-repeat: no-repeat;
  padding: 10px;
  background-image: url("./images/product2.png");
  border: 6px solid white;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    color: white;
    padding-top: 20px;
    font-size: 40px;
  }
  p {
    color: white;
    margin-top: -12px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 65vh;
    border: 2px solid white;
  }
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    padding: 0 20px;

    a {
      color: #06c;
      font-size: 20px;
      display: flex;
    }
  }

  @media (max-width: 768px) {
    span {
      padding: 10px;
    }
    a {
      font-size: 15px;
    }
  }
`;
