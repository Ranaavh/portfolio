import { CloseRounded } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react'
import { Container, Wrapper, Title, Date, Tags, Tag, Desc, Image, ButtonGroup, Button } from './projectDetailsStyles'




const index = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <Image src={project?.image} />
                    <Title>{project?.title}</Title>
                    <Date>{project.date}</Date>
                    <Tags>
                        {project?.tags.map((tag) => (
                            <Tag>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>{project?.description}</Desc>
                    
                    <ButtonGroup>
                        <Button dull href={project?.github} target='new'>View Code</Button>
                        <Button href={project?.webapp} target='new'>View Live App</Button>
                    </ButtonGroup>
                </Wrapper>
            </Container>

        </Modal>
    )
}

export default index