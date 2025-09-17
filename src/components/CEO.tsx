import React from "react";
import styled from "styled-components";

// 두 섹션에서 공통으로 사용될 컴포넌트들을 정의합니다.
// 이렇게 하면 디자인의 일관성을 쉽게 유지할 수 있습니다.

// 전체 섹션 컨테이너
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #ffffff; // About 섹션과 구분되는 하얀색 배경
  font-family: Helvetica, Arial, sans-serif;
`;

// 섹션 제목
const SectionTitle = styled.h1`
  padding-top: 80px;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 4rem;
  color: #2c3e50;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%; /* Set width to 100% of the parent (the text) */
    height: 3px;
    background-color: #2c3e50;
  }
`;

// 그리드 컨테이너 (반응형 레이아웃)
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// 카드 스타일 (공통 컴포넌트)
const Card = styled.div`
  background-color: #f7f9fc; // 배경과 대비되는 연한 회색 카드 배경
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

// 카드 내부 제목
const CardTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  color: #34495e;
  margin-bottom: 1rem;
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 0.5rem;
`;

// 카드 내부 목록
const CardList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 1.1rem;
  color: #555;
  line-height: 2;
`;
interface CEOProps {
  id?: string;
}

const CEO = ({ id }: CEOProps) => (
  <Section id={id}>
    <SectionTitle>도형석 소장</SectionTitle>

    <GridContainer>
      <Card>
        <CardTitle>자격 및 면허</CardTitle>
        <CardList>
          <li>건축사</li>
          <li>건축기사1급</li>
          <li>특급기술자</li>
          <li>수석감리사</li>
          <li>법원감정인</li>
          <li>초경량비행장치 (드론) 조종자격 1종</li>
        </CardList>
      </Card>

      <Card>
        <CardTitle>학력</CardTitle>
        <CardList>
          <li>서울 보성고</li>
          <li>고려대 건축공학과</li>
          <li>고려대 공학대학원 설계전공</li>
        </CardList>
      </Card>

      <Card>
        <CardTitle>경력</CardTitle>
        <CardList>
          <li>(주)우성건설</li>
          <li>(주)서인종합건축사사무소</li>
          <li>(주)건축설계정보 ARCHIDATA (벤처기업) 공동창업</li>
          <li>건설 분야 경력 35년</li>
        </CardList>
      </Card>

      <Card>
        <CardTitle>소속 협회 및 단체</CardTitle>
        <CardList>
          <li>대한건축학회 정회원</li>
          <li>대한건축사협회 정회원</li>
          <li>한국건축가협회 정회원</li>
          <li>서울시건축사회 정회원</li>
        </CardList>
      </Card>
    </GridContainer>
  </Section>
);

export default CEO;
