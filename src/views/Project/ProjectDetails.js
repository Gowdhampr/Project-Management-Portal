import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { Button, Input, Form, Label, FormGroup } from 'reactstrap';

// components
import PageTitle from "../../components/core/PageTitle";

// Service
import projectService from "../../service/projectService";

//Helper
import { getParamsByName, isAdmin, isStaff, isStudent } from "../../lib/helper";

const ProjectDetails= props => {
    const [projectsDetails, setProjectDetails] = useState([]);

    const projectId = props.match.params.id;
    useEffect(() => {
        getProjectDetails(projectId);
    }, []);

    const getProjectDetails = async (projectId) => {
        try {
          const response = await projectService.getDetailApi(projectId);

          const project = response.data.projectDetails;
          setProjectDetails(project);
        } catch (err) {
          console.log(err);
        }
    };
    

    const saveProject = async data => {
        try {
            const response = await projectService.saveDetails(data);
            toast.success(response.data.message);

            const project = response.data.projectDetails;
            setProjectDetails(project);

        } catch (err) {
            toast.error(err.response.data.message);
        }
  };

    return (
        <div>
            <PageTitle name="Project Details" />

            {/* {(isAdmin() || isStaff()) && ( */}
                <>
                    <div class="d-flex mb-2">
                        <div class="p-2">Projects</div>
                    </div>
                    <Form onSubmit={saveProject}>
                        <FormGroup>
                            <Label for="name">Project Title</Label>
                            <Input required type="text" name="name" id="name" placeholder="Enter project title" defaultValue={projectsDetails.name} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="technology">Technology</Label>
                            <Input required type="textarea" name="technology" id="technology" placeholder="Ex: C++, Java, etc..."  defaultValue={projectsDetails.technology} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="projectDescription">Project Description</Label>
                            <Input required type="textarea" rows={7} name="projectDescription" id="projectDescription" placeholder="Describe your project..."  defaultValue={projectsDetails.description} />
                        </FormGroup>
                        
                        {isAdmin() && <Button color="primary" type="Submit">Submit</Button>}
                    </Form>
                </>
            {/* )} */}
        </div>
    )
}

export default ProjectDetails;
