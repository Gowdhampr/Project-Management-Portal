import React from "react";

const PageTitle = ({ name, className }) => {
  return (
    <div>
      <h1 className={["text-36", "my-4", className].join(" ")}>
        {name}
      </h1>
    </div>
  );
};

export default PageTitle;
