import React from "react";

const Title = ({ name, className }) => {
  return (
    <div>
      <h1 className={["text-28", "mb-4", className].join(" ")}>
        {name}
      </h1>
    </div>
  );
};

export default Title;
