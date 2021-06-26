import React from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Section({
  title,
  description,
  backgroundImg,
  forntcolor,
  price,
  mobileImg,
}) {
  return (
    <Wrap bgImage={backgroundImg} bgmbImage={mobileImg}>
      <Text ftcolor={forntcolor}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p id="price">{price} </p>
        <Details>
          <span>
            <a>
              Laearn More <ArrowForwardIosIcon />
            </a>
          </span>
          <span>
            <a>
              Buy <ArrowForwardIosIcon />
            </a>
          </span>
        </Details>
      </Text>
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
  height: 80vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  margin-top: 10px;
  background-repeat: no-repeat;
  /* background-image: url("/images/img1.png"); */
  background-image: ${(props) => `url("/images/${props.bgImage}")`};

  @media (max-width: 768px) {
    background-image: ${(props) => `url("/images/${props.bgmbImage}")`};
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

const Text = styled.div`
  padding-top: 30px;

  h1 {
    color: ${(props) => `${props.ftcolor}`};
    font-size: 56px;
    font-weight: 600;
    letter-spacing: -0.005em;
    font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
    text-align: center;
  }
  p {
    color: ${(props) => `${props.ftcolor}`};
    margin-top: -30px;
    text-align: center;
    font-size: 25px;
  }
  #price {
    font-size: 15px;
    color: gray;
    padding-top: 10px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 36px;
    }

    p {
      font-size: 19px;
      padding-top: 10px;
    }
  }
`;
