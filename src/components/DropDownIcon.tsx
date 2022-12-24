import React, { useState } from "react";
import {
  roleTitle,
  roleIcon,
  roleFunction,
  roleHasModal,
} from "../data/dataSample";
import { Button } from "@mui/material";
import ModalConfirm from "./ModalConfirm";
interface IDropDown {
  typePage: string;
  listFunction: any;
  listRole: any;
}

const DropDownIcon: React.FC<IDropDown> = ({
  typePage,
  listFunction,
  listRole,
}) => {
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false);
  const renderItem = () => {};
  const handleClick = (id: string, roleID: string) => {
    if (roleFunction[roleID]) {
      const funcName = roleFunction[roleID];
      console.log("roleHasModal", roleHasModal[roleID]);
      if (roleHasModal[roleID]) {
        if (roleFunction[roleID] === "onDelete") {
          console.log("delete");
          setIsOpenModalDelete(true);
          return;
        }
        return;
      }
      listFunction[funcName](id);
    }
  };
  return (
    <>
      {listRole.map((role: any) => (
        <Button
          variant="outlined"
          startIcon={
            roleIcon[role] ? React.createElement(roleIcon[role]) : <></>
          }
          onClick={() => handleClick("0002", role)}
        >
          {roleTitle[role]}
        </Button>
      ))}
      <ModalConfirm
        text="Xác nhận xóa câu hỏi này"
        open={isOpenModalDelete}
        handleClick={() => listFunction["onDelete"]("0002")}
        handleClose={() => setIsOpenModalDelete(false)}
      />
    </>
  );
};
export default DropDownIcon;
