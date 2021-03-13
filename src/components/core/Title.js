import React from "react";

const Title = ({ name, className }) => {
  return (
    <div>
      <h1 className={["text-32", className].join(" ")}>
        {name}
      </h1>
    </div>
  );
};

export default Title;
