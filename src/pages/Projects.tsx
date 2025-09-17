import React, { useState } from "react";
import styled from "styled-components";
import { X, MapPin, Calendar, Building, Info, ImageOff } from "lucide-react";
import Container from "../common/Container";
import ScrollToTop from "../common/ScrollToTop";
import { projectsData, Project } from "../data/projects";

const ProjectsWrapper = styled.div`
  padding: 4rem 0;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

const ProjectImage = styled.div<{ src: string }>`
  width: 100%;
  height: 250px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 12px 12px 0 0;
`;

const ProjectInfo = styled.div`
  padding: 1rem 1.5rem;
  text-align: left;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0 0 0.25rem;
  color: #333;
`;

const ProjectSubtitle = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin: 0;
`;

// 이미지 에러 처리를 위한 스타일
const ImagePlaceholder = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  border-radius: 12px 12px 0 0;

  svg {
    margin-bottom: 0.5rem;
    opacity: 0.5;
  }

  span {
    font-size: 0.9rem;
    opacity: 0.7;
  }
`;

// 모달 스타일
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 12px;
  max-width: 800px;
  max-height: 90vh;
  width: 90%;
  overflow-y: auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  position: relative;
  transform: scale(0.95);
  animation: scaleIn 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);

  @keyframes scaleIn {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const ModalImage = styled.div<{ src: string }>`
  width: 100%;
  height: 350px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 12px 12px 0 0;
  position: relative;
`;

const ModalHeader = styled.div`
  padding: 1.5rem 2rem;
  position: relative;
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  color: #333;
`;

const ModalSubtitle = styled.p`
  font-size: 1rem;
  color: #777;
  margin: 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #eee;
  }
`;

const ModalBody = styled.div`
  padding: 1.5rem 2rem 2rem;
  text-align: left;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;

  svg {
    color: #495057;
  }
`;

const InfoLabel = styled.span`
  font-size: 0.85rem;
  color: #adb5bd;
  display: block;
`;

const InfoValue = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #343a40;
  display: block;
`;

const Description = styled.div`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #333;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    white-space: pre-wrap;
  }
`;

// 이미지 에러 처리를 포함하는 컴포넌트
const ProjectImageWithFallback: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [imageError, setImageError] = useState<boolean>(false);

  return imageError ? (
    <ImagePlaceholder>
      <ImageOff size={40} />
      <span>이미지 없음</span>
    </ImagePlaceholder>
  ) : (
    <ProjectImage src={src} role="img" aria-label={alt} onError={() => setImageError(true)} />
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <Container>
      <ScrollToTop />
      <ProjectsWrapper>
        <GalleryGrid>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} onClick={() => openModal(project)}>
              <ProjectImageWithFallback src={project.image} alt={`${project.title} 프로젝트 이미지`} />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </GalleryGrid>

        {selectedProject && (
          <ModalOverlay onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalImage src={selectedProject.image}>
                <CloseButton onClick={closeModal}>
                  <X size={20} />
                </CloseButton>
              </ModalImage>
              <ModalHeader>
                <ModalTitle>{selectedProject.title}</ModalTitle>
              </ModalHeader>

              <ModalBody>
                <InfoGrid>
                  <InfoItem>
                    <Calendar size={20} />
                    <div>
                      <InfoLabel>기간</InfoLabel>
                      <InfoValue>{selectedProject.period}</InfoValue>
                    </div>
                  </InfoItem>
                  <InfoItem>
                    <MapPin size={20} />
                    <div>
                      <InfoLabel>위치</InfoLabel>
                      <InfoValue>{selectedProject.location}</InfoValue>
                    </div>
                  </InfoItem>
                  <InfoItem>
                    <Building size={20} />
                    <div>
                      <InfoLabel>종류</InfoLabel>
                      <InfoValue>{selectedProject.category}</InfoValue>
                    </div>
                  </InfoItem>
                </InfoGrid>

                <Description>
                  <h4>
                    <Info size={20} />
                    프로젝트 설명
                  </h4>
                  <p>{selectedProject.description}</p>
                </Description>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}
      </ProjectsWrapper>
    </Container>
  );
};

export default Projects;
