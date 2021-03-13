import React from "react";
import { toast } from "react-toastify";
// import { useHistory } from "react-router-dom";

// Config
import userService from "../../service/userService";

// components
import Title from "../../components/core/Title";
import PageTitle from "../../components/core/PageTitle";

const Login = () => {
  // const history = useHistory();

  const createTeamLead = async data => {
    try {
      const res = await userService.create(data);
      toast.success(res.data.message);

    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password, firstName, lastName } = e.target;

    const data = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      role: userService.TEAM_LEAD_ROLE_ID,
    }

    createTeamLead(data);
  }

  return (
    <div className="d-flex mt-5 align-items-center h-100vh flex-column">
      <PageTitle name="Project Manager" />
      <div className="card p-3 w-50 mt-3">
        <Title name="Team Lead Sign Up" />

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" required type="text" className="form-control" id="firstName" placeholder="Enter first name" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" required type="text" className="form-control" id="lastName" placeholder="Enter last name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input name="email" required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input name="password" required type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
