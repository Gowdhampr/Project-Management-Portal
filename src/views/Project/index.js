import React, { useEffect, useState } from 'react';

// components
import PageTitle from "../../components/core/PageTitle";
import CreateProjectPopup from "./innerComponent/CreateProjectPopup";
import { Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";

// Service
import projectService from "../../service/projectService";

//Helper
import { isAdmin, isStaff, isStudent } from "../../lib/helper";

function Dashboard() {
    const history = useHistory();
    const [modal, setModal] = useState(false);
    const [projects, setProjects] = useState([]);

    const toggle = () => setModal(!modal);

    useEffect(() => {
        getProjectList();
    }, []);

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
            
                <>
                    {/* User */}
                    <div className="text-center mt-25">
                        <p>Project is not created yet!</p>
                        <Button color="primary" onClick={toggle}><i class="bi bi-plus-circle-dotted mr-1"></i> Create Project</Button>
                    </div>
                </>

             {/* Create project model */}
             <CreateProjectPopup toggle={toggle} modal={modal} history={history} />
        </div>
    )
}

export default Dashboard
