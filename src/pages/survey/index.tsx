import React, { useState } from "react";
import { formattedData, IRolDataFormatted } from "../../data/testData";
import { roleGroupName, roleGroupConstant } from "../../data/dataSample";
import AddIcon from "@mui/icons-material/Add";
import DropDownIcon from "../../components/DropDownIcon";
const survey: React.FC = () => {
  const editSurvey = () => {
    alert("edit Survey");
  };
  const removeSurvey = () => {
    alert("remove Survey");
  };
  const viewSurvey = () => {
    alert("view Survey");
  };
  const uploadSurvey = () => {
    alert("upload Survey");
  };
  const copyLinkSurvey = () => {
    alert("copy Link Survey");
  };
  const copySurvey = () => {
    alert("copy Survey");
  };
  const lockSurvey = () => {
    alert("lock Survey");
  };
  const roleFunctionDropDownList = {
    onEdit: editSurvey,
    onDelete: removeSurvey,
    onView: viewSurvey,
    onCopy: copySurvey,
    onLock: lockSurvey,
    onCopyLink: copyLinkSurvey,
  };
  return (
    <>
      <p>survey</p>
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
          typePage={roleGroupConstant.surveyList}
          listFunction={roleFunctionDropDownList}
          listRole={
            formattedData[roleGroupName.surveyList as keyof IRolDataFormatted]
          }
        />
      </ul>
    </>
  );
};
export default survey;
