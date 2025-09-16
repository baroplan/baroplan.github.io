import React from "react";
import styled from "styled-components";

// Main section container
const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  font-family: Arial, sans-serif;
  color: #333;
`;

// Title and subtitle container
const IntroContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
`;

// Heading for main content sections
const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 0.5rem;
  width: 100%;
  text-align: center;
`;

// Main content grid for services and achievements
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 1000px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// Card for content
const Card = styled.div`
  background-color: #f7f9fc;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

// List inside cards
const CardList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  line-height: 2;
`;

const About = () => (
  <AboutSection>
    <IntroContainer>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#2c3e50" }}>바로 건축사사무소</h1>
      <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "1rem" }}>Since 2001</p>
      <p style={{ fontSize: "1.2rem", color: "#555", lineHeight: "1.6" }}>항상 선한 인간과 모든 자연을 깊이 사랑하는 마음으로 주어진 일을 합니다.</p>
    </IntroContainer>

    <ContentGrid>
      {/* 주 업무 섹션 */}
      <Card>
        <SectionTitle>주요 업무</SectionTitle>
        <CardList>
          <li>건축설계</li>
          <li>감리 (건축사법)</li>
          <li>법원감정</li>
          <li>서울시 지정해체감리</li>
          <li>3D 일조 시뮬레이션</li>
          <li>건축물대장 관련 용역</li>
          <li>CM (건설사업관리)</li>
          <li>기타 건설관련 용역 (시공도면, 적산 및 내역 작성, 민원 관련 자문)</li>
          <li>부동산 컨설턴트 (연세대학교 상남경영원 고급전문가 과정 수료)</li>
        </CardList>
      </Card>

      {/* 주요 실적 섹션 */}
      <Card>
        <SectionTitle>주요 실적</SectionTitle>
        <CardList>
          <li>경찰청 (본청, 서울청 등) 설계 및 감리 약 50건</li>
          <li>학교 설계 및 감리 약 10건</li>
          <li>노인 복지관 설계 및 감리 약 10건</li>
          <li>유치원, 어린이집 설계 및 감리 3건</li>
          <li>기타 정부 발주 설계 및 감리 약 5건</li>
          <li>국제법률경영대학원 캠퍼스 기본설계</li>
          <li>민간 건축 설계 및 감리 약 15건</li>
          <li>한글라스 SPG 샵드로잉 약 30건</li>
          <li>법원 감정 (공사비 분쟁, 하자 분쟁 사건) 45건</li>
          <li>기타 자문 및 엔지니어링 다수</li>
        </CardList>
      </Card>
    </ContentGrid>
  </AboutSection>
);

export default About;
