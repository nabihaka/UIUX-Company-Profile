import * as React from "react";

const TitleSection = ({ title }) => {
  return (
    <h2 className="capitalize font-semibold text-4xl text-custom-blue tracking-negative-2">
      {title}
    </h2>
  );
};

export default TitleSection;
