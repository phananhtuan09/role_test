import React from "react";
import DropDownIcon from "../../components/DropDownIcon";
import { formattedData, IRolDataFormatted } from "../../data/testData";
import { roleGroupName, roleGroupConstant } from "../../data/dataSample";
const userManagement: React.FC = () => {
  const editUser = () => {
    alert("edit User");
  };
  const removeUser = () => {
    alert("edit User");
  };
  const roleFunctionDropDownList = {
    onEdit: editUser,
    onDelete: removeUser,
  };
  return (
    <>
      <p>userManagement</p>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          gap: "30px",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <DropDownIcon
          typePage={roleGroupConstant.questionBank}
          listFunction={roleFunctionDropDownList}
          listRole={
            formattedData[
              roleGroupName.userManagement as keyof IRolDataFormatted
            ]
          }
        />
      </ul>
    </>
  );
};
export default userManagement;
