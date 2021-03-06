import React from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

// Config
import authService from "../../service/authService";

// components
import Title from "../../components/core/Title";

//Helper
import { isAdmin, isStaff, isStudent } from "../../lib/helper";

const Login = () => {
  const history = useHistory();

  const loginUser = async data => {
    try {
      const response = await authService.login(data);
      localStorage.setItem("token", response.data.user.token);
      localStorage.setItem("userId", response.data.user.id);
      localStorage.setItem("role", response.data.user.role); 
      
      if (response.data.user.role === 1 || response.data.user.role === 2) {
        // Redirect to Dashboard
        history.push("/project/list");
      } else if(response.data.user.role === 3) {
        // Redirect to Dashboard
        history.push("/project");
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target;

    const data = {
      email: email.value,
      password: password.value,
    }

    loginUser(data);
  }

  return (
    <div className="d-flex mt-3 align-items-center h-100vh flex-column">
      <div className="card p-3 mt-3">
        <Title className="text-center" name="Login" />

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
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

export default Login;
