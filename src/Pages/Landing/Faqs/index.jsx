import React, { useState } from "react";
import { questions } from "./questions";
import Getemail from "../../../Components/Getemail";

function Faq() {
  return (
    <div className="faq border-bottom">
      <div className="container">
        <div className="title">Frequently Asked Questions</div>
        <div className="accordion accordion_container">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            {questions.map((question) => {
              const { id, title, desc1, desc2 } = question;

              return (
                <div className="accordion-item" key={id}>
                  <h2 className="accordion-header" id={title}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${id}`}
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      {title}
                      <span className="rot180 angle-icon">
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id={id}
                    className="accordion-collapse collapse"
                    aria-labelledby={title}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="desc1">{desc1}</p>
                      <p className="desc2 mt-3">{desc2}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Getemail />
      </div>
    </div>
  );
}

export default Faq;

{
  /* <div className="accordion-item">
<h2 className="accordion-header" id="flush-headingOne">
  <button
    className="accordion-button collapsed"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#flush-collapseOne"
    aria-expanded="false"
    aria-controls="flush-collapseOne"
  >
    Accordion Item #1
    <span className="rot180">
      <i className="fa-solid fa-angle-down"></i>
    </span>
  </button>
</h2>
<div
  id="flush-collapseOne"
  className="accordion-collapse collapse"
  aria-labelledby="flush-headingOne"
  data-bs-parent="#accordionFlushExample"
>
  <div className="accordion-body">
    Placeholder content for this accordion, which is intended to
    demonstrate the <code>.accordion-flush</code> class. This is
    the first item's accordion body.
  </div>
</div>
</div> */
}
