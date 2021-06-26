import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import DragHandleOutlinedIcon from "@material-ui/icons/DragHandleOutlined";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [burgerStatus, setBurgrtStatus] = useState(
    
  );
  return (
    <Container>
      <span id="menu">
        <a>
          <DragHandleOutlinedIcon onClick={() => setBurgrtStatus(true)} />
        </a>
      </span>
      <span>
        <a href="#">
          <img src="./images/logo.png"></img>
        </a>
      </span>
      <span id="hide">
        <a href="#">Mac</a>
      </span>
      <span id="hide">
        <a href="#">iPad</a>
      </span>
      <span id="hide">
        <a href="#">iPhone</a>
      </span>
      <span id="hide">
        <a href="#">Watch</a>
      </span>
      <span id="hide">
        <a href="#">TV</a>
      </span>
      <span id="hide">
        <a href="#">Music</a>
      </span>
      <span id="hide">
        <a href="#">Support</a>
      </span>
      <span id="hide">
        <a href="#">
          <SearchIcon />
        </a>
      </span>
      <span>
        <a href="#">
          <LocalMallOutlinedIcon />
        </a>
      </span>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgrtStatus(false)} />
        </CloseWrapper>

        <li>
          <SearchIcon />
        </li>

        <li>
          <a href="#">Mac</a>
        </li>
        <li>
          <a href="#">iPad</a>
        </li>
        <li>
          <a href="#">iPhone</a>
        </li>
        <li>
          <a href="#">Watch</a>
        </li>
        <li>
          <a href="#">TV</a>
        </li>
        <li>
          <a href="#">Music</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const CustomClose = styled(CloseIcon)`
  color: white;
`;

const CloseWrapper = styled.div`
  display: flex;
  margin-right: -200px;
`;

const BurgerNav = styled.div`
  display: none;
  @media (max-width: 768px) {
    position: fixed;
    top: 46px;
    bottom: 0;
    left: 0;
    background: black;
    width: 100%;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    align-items: center;
    justify-content: flex-start;
    transform: ${(props) =>
      props.show ? "translateX(0)" : "translateX(100%)"};

    li {
      padding: 20px;
      border-bottom: 1px solid gray;
      width: 100%;
      color: white;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 45px;
  background-color: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: sticky;
  top: 0;

  #menu {
    display: none;
  }
  span {
    color: white;
    padding: 36px;
    cursor: pointer;
  }
  a {
    font-size: 15px;
    display: flex;
    align-items: center;
    color: #bababc;

    :hover {
      color: white;
    }
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    margin: 0;
    height: 48px;
    box-sizing: border-box;

    #hide {
      display: none;
    }
    #menu {
      display: flex;
      color: white;
    }
  }
`;
