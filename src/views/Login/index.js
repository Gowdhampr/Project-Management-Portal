import React from "react";
import { toast } from "react-toastify";

// Config
import authService from "../../service/authService";

// components
import Title from "../../components/core/Title";
import PageTitle from "../../components/core/PageTitle";

const Login = () => {
  const loginUser = async data => {
    try {
      const res = await authService.login(data);
      toast.success(res.response.data.message);
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
    <div className="d-flex justify-content-center align-items-center h-100vh flex-column">
      <PageTitle name="Project Manager" />
      <div className="card p-3 w-50 mt-3">
        <Title name="Login" />

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
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
