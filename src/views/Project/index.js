import React, { useState } from 'react'

// components
import PageTitle from "../../components/core/PageTitle";
import CreateProjectPopup from "./innerComponent/CreateProjectPopup";
import { Button } from "reactstrap";

//Helper
import { isAdmin, isStaff, isStudent } from "../../lib/helper";

function Dashboard() {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

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
