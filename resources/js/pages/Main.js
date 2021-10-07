import React from "react";
import AuthForm from "../components/AuthForm";

export default function Main() {
  return (
    <div>
      <div className="main-background">
        <div className="main-box">
          <div className="main-logo"></div>
          <div>
            <AuthForm />
          </div>
        </div>
      </div>
    </div>
  );
}
