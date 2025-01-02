import * as React from "react";
import "@/styles/dashboard/main/team-members/teamMembers.css";
import { team_members_data } from "@/models/dashboard/main/teamMembers.jsx";
import { IoMdAddCircle } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";

const TeamMembers = () => {
  return (
    <div className="w-1/4 pr-5 pb-5">
      <div className="bg-white h-[345px] py-[1.625rem] rounded-3xl overflow-hidden">
        <div className="w-full h-full space-y-6">
          <div className="px-5 flex justify-between items-center">
            <h3 className="font-bold text-lg text-custom-blue tracking-negative-2">
              Team members
            </h3>
            <div className="w-[33px] h-[33px] bg-custom-light flex justify-center items-center rounded-lg">
              <IoMdAddCircle className="text-custom-purple scale-150" />
            </div>
          </div>
          <div className="px-5 h-[262px] space-y-[17px] overflow-y-auto">
            {team_members_data.map((member) => (
              <div
                key={member.id}
                className="bg-white px-4 py-3 flex justify-between items-center rounded-2xl shadow-xl"
                style={{
                  boxShadow: "0 18px 40px rgba(112, 144, 176, 0.12)",
                }}
              >
                <div className="flex gap-3 items-center">
                  {member.profilePhoto}
                  <div className="max-w-44 flex flex-col space-y-[2px] overflow-hidden">
                    <h3 className="capitalize font-bold text-base text-custom-blue tracking-negative-2 whitespace-nowrap overflow-auto hide-scrollbar">
                      {member.name}
                    </h3>
                    <span className="capitalize font-medium text-xs text-custom-gray whitespace-nowrap">
                      {member.role}
                    </span>
                  </div>
                </div>
                <HiDotsVertical className="text-xl text-custom-gray" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
