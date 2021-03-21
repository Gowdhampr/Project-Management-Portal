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

    const toggle = () => setModal(!modal);

    useEffect(() => {
        getProjectList();
    });

    const getProjectList = async () => {
        try {
          const response = await projectService.getListApi();

          console.log("Res--->", response)
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <div>
            <PageTitle name="Project" />

            {(isAdmin() || isStaff()) && (
                <>
                    <p>Admin</p>
                    <div class="d-flex">
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
                            <tr>
                                <td>John</td>
                                <td>Doe</td>
                                <td>john@example.com</td>
                            </tr>
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
