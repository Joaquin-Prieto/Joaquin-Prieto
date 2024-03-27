import { IoCartOutline } from "react-icons/io5";
import Badge from "@mui/material/Badge";

export const Carticon = () => {
  return (
    <div>
      <Badge badgeContent={2} color="primary">
        <IoCartOutline size={"2rem"} />
      </Badge>
    </div>
  );
};
