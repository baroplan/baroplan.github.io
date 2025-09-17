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

    image: "img/cancer_center.jpg",
    period: "1999.03 - 1999.08",
    location: "경기도 고양시",
    category: "설계",
    description:
      "국립암센터 소아청소년 암 환자 센터는 소아암 환자와 가족을 위한 전문적인 치료 및 지원 시설입니다. 이 프로젝트는 환자 중심의 설계를 통해 쾌적하고 안전한 환경을 제공하는 것을 목표로 하였습니다.",
  },

  {
    id: 2,
    title: "서초동 뎌샵서초",
    image: "img/default-building.jpeg",
    period: "2022년",
    location: "서울특별시 서초구",
    category: "설계",
    description: "서초동 뎌샵서초 대수선허가. 122,642㎡. ",
  },
  {
    id: 3,
    title: "용이동 노유자시설",
    image: "img/default-building.jpeg",
    period: "2021년",
    location: "경기도 평택시",
    category: "설계",
    description: "용이동 노유자시설 신축사용승인. 3층, 1,137㎡.",
  },
  {
    id: 4,
    title: "상계동 서울특별시 북부기술교육원 / 상이군경복지관 / 상이군경복지관보훈관",
    image: "img/default-building.jpeg",
    period: "2021년",
    location: "서울특별시 노원구",
    category: "설계",
    description: "상계동 서울특별시 북부기술교육원 / 상이군경복지관 / 상이군경복지관보훈관 증축사용승인. 1층, 15,617㎡.",
  },
  {
    id: 5,
    title: "쌍문동 의료시설",
    image: "img/default-building.jpeg",
    period: "2018년",
    location: "서울특별시 도봉구",
    category: "설계",
    description: "쌍문동 의료시설 증축사용승인. 7층, 39,578㎡.",
  },
  {
    id: 6,
    title: "천왕동 교정및군사시설",
    image: "img/default-building.jpeg",
    period: "2017년",
    location: "서울특별시 구로구",
    category: "설계",
    description: "천왕동 교정및군사시설 대수선허가. 2층, 79,026㎡.",
  },
  {
    id: 7,
    title: "신대방동 남부수도사업소",
    image: "img/default-building.jpeg",
    period: "2016년",
    location: "서울특별시 동작구",
    category: "증축허가",
    description: "신대방동 남부수도사업소 증축허가. 4층, 3,847㎡.",
  },
  {
    id: 8,
    title: "복정동 단독주택 신축사용승인",
    image: "img/default-building.jpeg",
    period: "2016년",
    location: "경기도 성남시",
    category: "신축사용승인",
    description: "복정동 단독주택 신축사용승인. 4층, 368㎡.",
  },
  {
    id: 9,
    title: "신사동 제2종근린생활시설 ",
    image: "img/default-building.jpeg",
    period: "2015년",
    location: "서울특별시 강남구",
    category: "대수선사용승인",
    description: "신사동 제2종근린생활시설 대수선사용승인. 4층, 508㎡.",
  },
  {
    id: 10,
    title: "금오동 한국석유관리원 수도권북부본부",
    image: "img/default-building.jpeg",
    period: "2014년",
    location: "경기도 의정부시",
    category: "신축사용승인",
    description: "금오동 한국석유관리원 수도권북부본부 신축사용승인. 4층, 1,311㎡.",
  },
  {
    id: 11,
    title: "공도읍 제2종근린생활시설",
    image: "img/default-building.jpeg",
    period: "2012년",
    location: "경기도 안성시",
    category: "신축사용승인",
    description: "공도읍 제2종근린생활시설 신축사용승인. 1층, 72㎡.",
  },
  {
    id: 12,
    title: "남포면 봉덕리 창고시설",
    image: "img/default-building.jpeg",
    period: "2011년",
    location: "충청남도 보령시",
    category: "신축사용승인",
    description: "남포면 봉덕리 창고시설 신축사용승인. 1층, 18㎡.",
  },
  {
    id: 13,
    title: "진관동 서울진관유치원 ",
    image: "img/default-building.jpeg",
    period: "2011년",
    location: "서울특별시 은평구",
    category: "신축허가",
    description: "진관동 서울진관유치원 신축허가. 4층, 1,732㎡.",
  },
  {
    id: 14,
    title: "역촌동 공동주택",
    image: "img/default-building.jpeg",
    period: "2011년",
    location: "서울특별시 은평구",
    category: "대수선사용승인",
    description: "역촌동 공동주택 대수선사용승인. 3층, 365㎡.",
  },
  {
    id: 15,
    title: "석관동 석관지구대 ",
    image: "img/default-building.jpeg",
    period: "2010년",
    location: "서울특별시 성북구",
    category: "신축사용승인",
    description: "석관동 석관지구대 신축사용승인. 3층, 304㎡.",
  },
  {
    id: 16,
    title: "남가좌동 가좌지구대 증축사용승인",
    image: "img/default-building.jpeg",
    period: "2009년",
    location: "서울특별시 서대문구",
    category: "증축사용승인",
    description: "남가좌동 가좌지구대 증축사용승인. 3층, 242㎡.",
  },
  {
    id: 17,
    title: "역촌동 공동주택 ",
    image: "img/default-building.jpeg",
    period: "2009년",
    location: "서울특별시 은평구",
    category: "신축사용승인",
    description: "역촌동 공동주택 신축사용승인. 5층, 365㎡.",
  },
  {
    id: 18,
    title: "장위동 종암경찰서 장위지구대 ",
    image: "img/default-building.jpeg",
    period: "2004년",
    location: "서울특별시 성북구",
    category: "대수선사용승인",
    description: "장위동 종암경찰서 장위지구대 대수선사용승인. 3층.",
  },
];
