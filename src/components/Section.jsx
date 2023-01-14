import React from "react";

function Section({ title, button, children, img }) {
  return (
    <div>
      <div>
        <div>
          <h2>{title}</h2>
          {children}
          <button className="btn-1 bg-white text-blue-600 font-bold px-5 py-3">
            {button}
          </button>
        </div>
        <div>
          <img src={img} alt={title} />
        </div>
      </div>
    </div>
  );
}
export default Section;
