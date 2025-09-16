import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

// Main footer container with a distinct background
const FooterSection = styled.footer`
  padding: 4rem 2rem;
  background-color: #f0f4f8; /* Lighter, cooler gray to differentiate from main content */
  font-family: Arial, sans-serif;
  color: #555;
  border-top: 1px solid #e0e6ed; /* A subtle line to separate it from the main page */
`;

// Container to hold the main content
const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block; /* Change from block to inline-block */

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%; /* Set width to 100% of the parent (the text) */
    height: 3px;
    background-color: #3498db;
  }ㄹ
`;

const InfoText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #777;
  margin-bottom: 0.5rem;

  a {
    color: #777;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #3498db;
    }
  }
`;

const CopyrightText = styled.p`
  text-align: center;
  margin-top: 4rem;
  font-size: 0.9rem;
  color: #999;
  border-top: 1px solid #e0e6ed;
  padding-top: 2rem;
`;

const Footer = () => {
  return (
    <FooterSection>
      <ContentContainer>
        <Row gutter={[32, 32]} justify="start">
          {/* Company Info */}
          <Col lg={8} md={12} sm={24}>
            <FooterTitle>오시는 길</FooterTitle>
            <InfoText style={{ marginTop: "1.5rem" }}>
              <a href="https://naver.me/5jBZXrRl">
                서울 강남구 테헤란로 313 <br /> 성지하이츠1차 12층 1201호
              </a>
            </InfoText>
          </Col>

          <Col lg={6} md={12} sm={12}>
            <FooterTitle>연락처</FooterTitle>
            <InfoText>
              <div>02-2052-3394</div>
              <a href="mailto:baro@baroplan.com">baro@baroplan.com</a>
            </InfoText>
          </Col>

          <Col lg={6} md={12} sm={12}>
            <FooterTitle>블로그</FooterTitle>

            <InfoText>
              <a href="https://blog.naver.com/worldcupgame" target="_blank" rel="noopener noreferrer">
                https://blog.naver.com/worldcupgame
              </a>
            </InfoText>
          </Col>
        </Row>
      </ContentContainer>

      <CopyrightText>&copy; {new Date().getFullYear()} 바로 건축사사무소. All Rights Reserved.</CopyrightText>
    </FooterSection>
  );
};

export default Footer;
