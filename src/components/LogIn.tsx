import axios from "axios";
import React, { useState } from "react";

export const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted: ", formData);

    try {
      const response = await axios.post(
        "https://arcadia-api.tokismoki.repl.co/auth/login",
        formData
      );
      console.log("Login response:", response.data);
    } catch (error) {
      console.error(error);
    } finally {
      window.location.href = "/homepage";
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="mt-5 col-3 offset-4">
      <div className="row ">
        <div className="col-12 text-center">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 d-flex justify-content-between">
                {" "}
                <label>
                  Email:
                </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 d-flex justify-content-between">
                <label>
                  Password:
                </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
              </div>
            </div>
            <button className="btn btn-success mt-5" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
