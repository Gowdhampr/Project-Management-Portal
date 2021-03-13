import React from 'react';
import { toast } from "react-toastify";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form, Label, FormGroup } from 'reactstrap';

// Service
import projectService from "../../../service/projectService";

const CreateProjectModel = (props) => {
  const {
    className,
    modal,
    toggle,
  } = props;

  const createProject = async data => {
    try {
      const res = await projectService.create(data);
      toast.error(res.response.data.message);

      toggle();
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, technology, projectDescription } = e.target;

    const data = {
      name: name.value,
      description: projectDescription.value,
      technology: technology.value,
      status: "Pending",
      staffId: 2,
      teamLeadId: 3,
    }

    createProject(data);
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className} style={{ maxWidth: "600px" }}>
        <ModalHeader toggle={toggle}><b>Create Project</b></ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <FormGroup>
              <Label for="name">Project Title</Label>
              <Input required type="text" name="name" id="name" placeholder="Enter project title" />
            </FormGroup>
            <FormGroup>
              <Label for="technology">Technology</Label>
              <Input required type="textarea" name="technology" id="technology" placeholder="Ex: C++, Java, etc..." />
            </FormGroup>
            <FormGroup>
              <Label for="projectDescription">Project Description</Label>
              <Input required type="textarea" rows={7} name="projectDescription" id="projectDescription" placeholder="Describe your project..." />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" type="button" onClick={toggle}>Cancel</Button>
            <Button color="primary" type="Submit">Submit</Button>{' '}
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
}

export default CreateProjectModel;