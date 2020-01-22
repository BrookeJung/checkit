import React from 'react'

const Login = ({ onGoogleLogin, onFaceLogin }) => {
  return (
    <div className="container-fluid">
      <div className="row text-center">
        <div className="col-sm-12 jumbotron">
          <h1>Social Login</h1>
        </div>
        <div className="col-sm-6">
          <button
            className="btn btn-danger btn-lg"
            onClick={() => onGoogleLogin()}
          >
            Google LOGIN
          </button>
        </div>
        <br />
        <div className="col-sm-6">
          <button
            className="btn btn-success btn-lg"
            onClick={() => onFaceLogin()}
          >
            Twitter LOGIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
