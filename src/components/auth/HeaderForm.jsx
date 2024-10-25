import * as React from "react";

const HeaderForm = ({ title, description }) => {
  return (
    <div>
      <h2 className="font-bold text-4xl text-custom-blue mb-2 tracking-negative-2">
        {title}
      </h2>
      <p className="text-base text-custom-gray font-normal tracking-negative-2">
        {description}
      </p>
    </div>
  );
};

export default HeaderForm;
