// data/projects.js
export interface Project {
  id: number;
  title: string;

  image: string;
  period: string;
  location: string;
  description: string;
  category: string;
}

export const projectsData = [
  {
    id: 1,
    title: "국립암센터 소아청소년 암 환자 센터",

    image: "public/img/cancer_center.jpg",
    period: "1999.03 - 1999.08",
    location: "경기도 고양시",
    category: "설계",
    description:
      "국립암센터 소아청소년 암 환자 센터는 소아암 환자와 가족을 위한 전문적인 치료 및 지원 시설입니다. 이 프로젝트는 환자 중심의 설계를 통해 쾌적하고 안전한 환경을 제공하는 것을 목표로 하였습니다.",
  },
  {
    id: 2,
    title: "우성 어린이집",
    image: "public/img/cancer_center.jpg",
    period: "1999.03 - 1999.08",
    location: "서울특별시 서초구",
    category: "설계",
    description: "어린이집 프로젝트는 아이들의 안전과 창의성을 최우선으로 고려한 설계로, 다양한 놀이 공간과 학습 환경을 제공하여 아이들이 즐겁고 건강하게 성장할 수 있도록 지원합니다.",
  },
  {
    id: 3,
    title: "건물명",
    image: "public/img/cancer_center.jpg",
    period: "1999.03 - 1999.08",
    location: "위치",
    category: "카테고리",
    description: "프로젝트 설명",
  },
  {
    id: 4,
    title: "건물명",
    image: "public/img/cancer_center.jpg",
    period: "1999.03 - 1999.08",
    location: "위치",
    category: "카테고리",
    description: "프로젝트 설명",
  },
];
