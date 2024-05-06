import { LaptopChromebook } from "@mui/icons-material";

import { Avatar } from "@mui/material";

const TopBar = () => {
  return (
    <div className="text-purple-600 bg-white flex justify-between  py-6 px-8 sticky top-0 z-50">
      <div className="text-4xl font-bold ">
        Admin <LaptopChromebook fontSize="36px" />
      </div>
      <div className="flex gap-3  items-center">
        <Avatar
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        />
      </div>
    </div>
  );
};

export default TopBar;
