import * as React from "react";
import { Link } from "react-router-dom";

const ChangeAuth = ({ question, action, link }) => {
  return (
    <div className="text-4 flex flex-row justify-start items-center mb-[14px] h-[26px]">
      <span className="text-normal text-6 tracking-negative-2">
        {question}{" "}
        <Link to={link} className="text-custom-purple font-bold">
          {action}
        </Link>
      </span>
    </div>
  );
};

export default ChangeAuth;
