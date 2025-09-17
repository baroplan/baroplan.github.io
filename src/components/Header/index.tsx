import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { HeaderSection, LogoContainer, Burger, NotHidden, Menu, CustomNavLinkSmall, Label, Outline, Span } from "./styles";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);
  const history = useHistory();
  const location = useLocation();

  const toggleButton = () => {
    setVisibility(!visible);
  };

  useEffect(() => {
    if (location.pathname === "/" && pendingScroll) {
      const timer = setTimeout(() => {
        const element = document.getElementById(pendingScroll);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
          setPendingScroll(null);
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, pendingScroll]);
  const MenuItem = () => {
    const scrollTo = (id: string) => {
      setVisibility(false);

      // 현재 홈페이지에 있는 경우 바로 스크롤
      if (location.pathname === "/") {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        } else {
          console.warn(`Element with id '${id}' not found`);
        }
      } else {
        // 다른 페이지에 있는 경우 홈으로 이동 후 스크롤 예약
        setPendingScroll(id);
        history.push("/");
      }
    };

    const navigateToHome = () => {
      history.push("/");
      setVisibility(false);
    };

    const navigateToProject = () => {
      history.push("/project");
      setVisibility(false);
    };

    return (
      <>
        <CustomNavLinkSmall onClick={navigateToHome}>
          <Span>{t("소개")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("ceo")}>
          <Span>{t("대표자")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={navigateToProject}>
          <Span>{t("프로젝트")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <Span>{t("미디어")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall style={{ width: "180px" }} onClick={() => scrollTo("contact")}>
          <Span>
            <Button>{t("연락처")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
