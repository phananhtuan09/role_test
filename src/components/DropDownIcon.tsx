import React, { useState } from "react";
import {
  roleName,
  roleIcon,
  roleFunction,
  roleHasModal,
  onDeleteFunc,
  roleData,
  roleGroupConstant,
  roleGroupName,
  roleDataDropDown,
} from "../data/dataSample";
import { Button } from "@mui/material";
import ModalConfirm from "./ModalConfirm";
interface IDropDown {
  typePage: number;
  listFunction: any;
  listRole: number[];
}

const DropDownIcon: React.FC<IDropDown> = ({
  typePage,
  listFunction,
  listRole,
}) => {
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false);
  const handleClick = (id: string, roleID: number) => {
    if (roleFunction[roleID]) {
      const funcName = roleFunction[roleID];
      if (roleHasModal[roleID]) {
        if (roleFunction[roleID] === onDeleteFunc) {
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
      {roleDataDropDown[typePage].map((role: number, index: number) => {
        if (listRole.includes(role)) {
          return (
            <Button
              key={`${role}_${index}`}
              variant="outlined"
              startIcon={
                roleIcon[role] ? React.createElement(roleIcon[role]) : <></>
              }
              onClick={() => handleClick("0002", role)}
            >
              {roleName[role]}
            </Button>
          );
        }
      })}
      <ModalConfirm
        text="Xác nhận xóa câu hỏi này"
        open={isOpenModalDelete}
        handleClick={() => {
          listFunction[onDeleteFunc]("0002");
          setIsOpenModalDelete(false);
        }}
        handleClose={() => setIsOpenModalDelete(false)}
      />
    </>
  );
};
export default DropDownIcon;
