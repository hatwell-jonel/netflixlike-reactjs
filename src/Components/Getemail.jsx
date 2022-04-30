import React from "react";

function Getemail() {
  return (
    <div className="get_email">
      <form className="form_email">
        <h3 className="form_email-title">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <div className="input-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email address"
            aria-describedby="get-started"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="get-started"
          >
            Get Started <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Getemail;
