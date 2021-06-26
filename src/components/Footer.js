import React from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";

function Footer() {
  return (
    <Container>
      <DataContainer>
        <p>*Listed pricing is Maximum Retail Price (inclusive of all taxes).</p>
        <p>
          1. ₹99/month after free trial. One subscription per Family Sharing
          group. Offer is valid for 3 months after eligible device activation.
          Plan automatically renews until cancelled. Restrictions and other
          terms apply.
        </p>
        <p>
          Apple TV+ is ₹99/month after free trial. One subscription per Family
          Sharing group. Offer is valid for 3 months after eligible device
          activation. Plan automatically renews until cancelled. Restrictions
          and other terms apply.
        </p>

        <ExtraData>
          <FirstLine>
            <p id="Service_name">
              Shop and Learn <AddIcon id="plus" />
            </p>
            <li>
              <a>Mac</a>
            </li>
            <li>
              <a>iPad</a>
            </li>
            <li>
              <a>iPhone</a>
            </li>
            <li>
              <a>Watch</a>
            </li>
            <li>
              <a>TV</a>
            </li>
            <li>
              <a>Music</a>
            </li>
            <li>
              <a>Airpods</a>
            </li>
            <li>
              <a>HomePod mini</a>
            </li>
            <li>
              <a>iPod touch</a>
            </li>
            <li>
              <a>AirTag</a>
            </li>
            <li>
              <a>Accessories</a>
            </li>
          </FirstLine>
          <SecondLine>
            <p id="Service_name">
              Services <AddIcon id="plus" />
            </p>
            <li>
              <a>Apple Music</a>
            </li>
            <li>
              <a>Apple TV+</a>
            </li>
            <li>
              <a>Apple Arcade</a>
            </li>
            <li>
              <a>iCloud</a>
            </li>
            <li>
              <a>Apple One</a>
            </li>
            <li>
              <a>Apple Books</a>
            </li>
            <li>
              <a>Apple Store</a>
            </li>
            <Section>
              <p id="Service_name">
                Account <AddIcon id="plus" />
              </p>
              <li>
                <a>Manage Your Apple ID</a>
              </li>
              <li>
                <a>Apple Store Account</a>
              </li>
              <li>
                <a>iCloud.com</a>
              </li>
            </Section>
          </SecondLine>
          <ThirdLine>
            <p id="Service_name">
              Apple Store <AddIcon id="plus" />
            </p>
            <li>
              <a>Shop Online</a>
            </li>
            <li>
              <a>Ways to Buy</a>
            </li>
            <li>
              <a>Apple Trade In</a>
            </li>
            <li>
              <a>Recycling Programme</a>
            </li>
            <li>
              <a>Order Status</a>
            </li>
            <li>
              <a>Shopping Help</a>
            </li>
          </ThirdLine>
          <ThirdLine>
            <p id="Service_name">
              For Business <AddIcon id="plus" />
            </p>
            <li>
              <a>Apple and Business</a>
            </li>

            <Section>
              <p id="Service_name">
                For Education <AddIcon id="plus" />
              </p>
              <li>
                <a>Apple and Education</a>
              </li>
              <li>
                <a>Shop for Education</a>
              </li>
              <li>
                <a>Shop for Univercity</a>
              </li>
            </Section>
            <Section>
              <p id="Service_name">
                For Healthcare <AddIcon id="plus" />
              </p>
              <li>
                <a>Apple in Healthcare</a>
              </li>
              <li>
                <a>Health on Apple Watch</a>
              </li>
            </Section>
          </ThirdLine>
          <ThirdLine>
            <p id="Service_name">
              Apple Values <AddIcon id="plus" />
            </p>
            <li>
              <a>Accessibility</a>
            </li>
            <li>
              <a>Environment</a>
            </li>
            <li>
              <a>Privacy</a>
            </li>
            <li>
              <a>Supplier Responsibility</a>
            </li>
            <Section>
              <p id="Service_name">
                About Apple <AddIcon id="plus" />
              </p>
              <li>
                <a>Newsroom</a>
              </li>
              <li>
                <a>Apple Leadership</a>
              </li>
              <li>
                <a>Job Opportunities</a>
              </li>
              <li>
                <a>Investors</a>
              </li>
              <li>
                <a>Ethics & Compiliance</a>
              </li>
              <li>
                <a>Events</a>
              </li>
              <li>
                <a>Contact Apple</a>
              </li>
            </Section>
          </ThirdLine>
        </ExtraData>
        <p id="underline">
          More ways to shop:
          <a id="link" href="/">
            Find a retailernear
          </a>
          you. Or call 000800 040 1966.
        </p>
        <Copyright>
          <p>Copyright © 2021 Apple Inc. All rights reserved. </p>
          <p>
            <span id="line">Privacy Policy</span>
            <span id="line">Terms of Use</span>
            <span id="line">Sales Police</span>
            <span id="line">Legal</span>
            <span>Site Map</span>
          </p>
          <p>India</p>
        </Copyright>
      </DataContainer>
    </Container>
  );
}

export default Footer;

const FirstLine = styled.div`
  margin: 0 9% 0 0;
  li {
    text-decoration: none;
    list-style-type: none;
    padding-bottom: 8px;
  }
  a {
    color: #555558;
    font-size: 12px;
  }
  #plus {
    display: none;
  }

  @media (max-width: 768px) {
    #plus {
      display: flex;
      width: 15px;
      height: auto;
      cursor: pointer;
    }
    li {
      display: none;
      margin: 0;
    }
  }
`;

const SecondLine = styled(FirstLine)``;

const ThirdLine = styled(FirstLine)``;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-top: 100px;
  position: sticky;
  bottom: 0;
  position: relative;
  display: flex;
  background-color: #f5f5f7;
`;

const DataContainer = styled.div`
  width: 70%;
  height: auto;
  position: relative;
  margin: 0 15%;
  align-items: center;

  p {
    font-size: 0.85em;
    color: gray;
  }
  #underline {
    border-bottom: 1px solid gray;
    padding-bottom: 1px;

    #link {
      color: blue;
      padding-right: 3px;
    }
  }

  @media (max-width: 768px) {
    width: 91%;
    margin: 0 20px;
  }
`;

const ExtraData = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  border-top: 1px solid gray;
  display: flex;

  #Service_name {
    color: black;
    font-size: 10px;
    font-weight: 505;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Section = styled.div``;

const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    padding: 15px;
  }

  #line {
    border-right: 1px solid #d2d2d7;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    span {
      margin: 0;
      align-items: left;
      justify-content: space-between;
    }
    #line {
      border: none;
    }
  }
`;
