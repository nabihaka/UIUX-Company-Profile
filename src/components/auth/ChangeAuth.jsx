import * as React from "react";
import { Link } from "react-router-dom";

const ChangeAuth = ({ question, action, link }) => {
  return (
    <div className="text-4 flex flex-row justify-start items-center mb-3.5 h-[1.625rem]">
      <span className="font-normal text-base tracking-negative-2">
        {question}{" "}
        <Link
          to={link}
          className="text-custom-purple font-bold text-base hover:text-custom-blue"
        >
          {action}
        </Link>
      </span>
    </div>
  );
};

export default ChangeAuth;
