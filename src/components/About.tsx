import React from "react";

const About = () => (
  <section style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem" }}>
    <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>바로 건축사사무소</h1>
    <p style={{ fontSize: "1.2rem", color: "#555", textAlign: "center", maxWidth: "600px" }}>
      Since 2001
      <br />
      항상 선한 인간과 모든 자연을 깊이 사랑하는 마음으로
      <br />
      주어진 일을 합니다.
    </p>
    {/* 필요하다면 이미지, 버튼 등 추가 가능 */}
  </section>
);

export default About;
