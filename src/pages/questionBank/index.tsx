import React from "react";
import { formattedData, IRolDataFormatted } from "../../data/testData";
import { roleGroupName, roleGroupConstant } from "../../data/dataSample";
import AddIcon from "@mui/icons-material/Add";
import DropDownIcon from "../../components/DropDownIcon";

const questionBank: React.FC = () => {
  console.log("formattedData", formattedData);

  const addQuestion = () => {
    alert("add Question");
  };
  const editQuestion = () => {
    alert("edit Question");
  };
  const removeQuestion = () => {
    alert("remove Question");
  };
  const viewQuestion = () => {
    alert("view Question");
  };
  const uploadQuestion = () => {
    alert("upload Question");
  };
  const copyQuestion = () => {
    alert("copy Question");
  };

  const roleFunctionDropDownList = {
    onEdit: editQuestion,
    onDelete: removeQuestion,
    onView: viewQuestion,
    onCopy: copyQuestion,
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      <p>Question Bank</p>
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
            formattedData[roleGroupName.questionBank as keyof IRolDataFormatted]
          }
        />
      </ul>
    </div>
  );
};
export default questionBank;
