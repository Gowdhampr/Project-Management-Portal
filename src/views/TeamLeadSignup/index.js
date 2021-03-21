import React from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

// Config
import userService from "../../service/userService";

// components
import Title from "../../components/core/Title";

const Register = () => {
  const history = useHistory();

  const createTeamLead = async data => {
    try {
      const response = await userService.create(data);

      localStorage.setItem("token", response.data.user.token);
      localStorage.setItem("userId", response.data.user.id);
      localStorage.setItem("role", response.data.user.role); 

      history.push("/project")

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
    <div className="d-flex mt-3 align-items-center h-100vh flex-column">
      <div className="card p-3 mt-3">
        <Title className="text-center" name="Team Lead Sign Up" />

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
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit</button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
