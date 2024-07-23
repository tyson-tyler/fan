import { UserProfile } from "@clerk/nextjs";
import React from "react";

const Setting = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <UserProfile routing="hash" />
    </div>
  );
};

export default Setting;
