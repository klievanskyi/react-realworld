import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formData = {
    username: "",
    email: "",
    password: ""
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    formData.username = username;
    formData.email = email;
    formData.password = password;

    async function fetchData() {
      const response = await fetch("https://api.realworld.io/api/users", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({user: formData})
      })
      const data = await response.json();
      console.log(data);
    }
    fetchData();
    console.log(formData);

  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <a href="">Have an account?</a>
            </p>

            <ul className="error-messages">
              <li>That email is already taken</li>
            </ul>

            <form method="post" onSubmit={handleSubmit}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  onChange={e => setUsername(e.target.value)}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  onChange={e => setEmail(e.target.value)}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
