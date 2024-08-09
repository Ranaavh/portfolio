import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("mern");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "mern" ? (
            <ToggleButton active value="mern" onClick={() => setToggle("mern")}>
              MERN
            </ToggleButton>
          ) : (
            <ToggleButton value="mern" onClick={() => setToggle("mern")}>
              MERN
            </ToggleButton>
          )}
          <Divider />
          {toggle === "react mini" ? (
            <ToggleButton
              active
              value="react mini"
              onClick={() => setToggle("react mini")}
            >
              REACT MINI
            </ToggleButton>
          ) : (
            <ToggleButton
              value="react mini"
              onClick={() => setToggle("react mini")}
            >
              REACT MINI
            </ToggleButton>
          )}
          <Divider />
          {toggle === "bootsrap" ? (
            <ToggleButton
              active
              value="bootsrap'"
              onClick={() => setToggle("bootsrap")}
            >
              BOOTSRAP
            </ToggleButton>
          ) : (
            <ToggleButton
              value="bootsrap"
              onClick={() => setToggle("bootsrap")}
            >
              BOOTSRAP
            </ToggleButton>
          )}
          <Divider />
          {toggle === "jquey" ? (
            <ToggleButton
              active
              value="jquey"
              onClick={() => setToggle("jquey")}
            >
              JQUERY
            </ToggleButton>
          ) : (
            <ToggleButton value="jquey" onClick={() => setToggle("jquey")}>
              JQUERY
            </ToggleButton>
          )}
          <Divider />
          {toggle === "html/css" ? (
            <ToggleButton
              active
              value="html/css"
              onClick={() => setToggle("html/css")}
            >
              HTML/CSS
            </ToggleButton>
          ) : (
            <ToggleButton
              value="html/css"
              onClick={() => setToggle("html/css")}
            >
              HTML/CSS
            </ToggleButton>
          )}
          <Divider />
          {toggle === "machine learning" ? (
            <ToggleButton
              active
              value="machine learning"
              onClick={() => setToggle("machine learning")}
            >
              MACHINE LEARNING
            </ToggleButton>
          ) : (
            <ToggleButton
              value="machine learning"
              onClick={() => setToggle("machine learning")}
            >
              MACHINE LEARNING
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
