import React, { useEffect, useState } from 'react';

// components
import PageTitle from "../../components/core/PageTitle";
import CreateProjectPopup from "./innerComponent/CreateProjectPopup";
import { Button } from "reactstrap";

// Service
import projectService from "../../service/projectService";

//Helper
import { isAdmin, isStaff, isStudent } from "../../lib/helper";

function Dashboard() {
    const [modal, setModal] = useState(false);
    const [projects, setProjects] = useState([]);

    const toggle = () => setModal(!modal);

    useEffect(() => {
        getProjectList();
    }, [projects]);

    const getProjectList = async () => {
        try {
          const response = await projectService.getListApi();

          const projectLists = response.data.projectList;

          setProjects(projectLists);
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <div>
            <PageTitle name="Project" />

            {(isAdmin() || isStaff()) && (
                <>
                    <div class="d-flex mb-2">
                        <div class="p-2">Projects</div>
                        <div class="p-2 ml-auto"><Button color="primary" onClick={toggle}><i class="bi bi-plus-circle-dotted mr-1"></i> Create Project</Button></div>
                    </div>

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Technology</th>
                                <th>Batch</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects && projects.length && projects.map(project => (
                                <tr>
                                    <td>{project.name}</td>
                                    <td>{project.technology}</td>
                                    <td>{project.batch}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
            
            {isStudent() && (
                <>
                    {/* User */}
                    <div className="text-center mt-25">
                        <p>Project is not created yet!</p>
                        <Button color="primary" onClick={toggle}><i class="bi bi-plus-circle-dotted mr-1"></i> Create Project</Button>
                    </div>
                </>
            )}

             {/* Create project model */}
             <CreateProjectPopup toggle={toggle} modal={modal} />
        </div>
    )
}

export default Dashboard
