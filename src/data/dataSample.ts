import {
  CopyLinkIcon,
  EditIcon,
  DeleteIcon,
  LockIcon,
  ViewIcon,
  CopySurveyIcon,
} from "../icons";

type TRoleGroupName =
  | "userGroup"
  | "userManagement"
  | "questionBank"
  | "surveyList";
type TRoleGroupID = 5 | 6 | 7 | 8;

export const roleGroupConstant: Record<TRoleGroupName, TRoleGroupID> = {
  userGroup: 5,
  userManagement: 6,
  questionBank: 7,
  surveyList: 8,
};

export const roleGroupName: Record<TRoleGroupName, string> = {
  userGroup: "Quản lý nhóm người dùng",
  userManagement: "Quản lý người dùng",
  questionBank: "Ngân hàng câu hỏi",
  surveyList: "Bài khảo sát",
};

type TRoleID = 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;
type TRoleName =
  | "all"
  | "edit"
  | "view"
  | "sync"
  | "exportExcel"
  | "addSurvey"
  | "copySurvey"
  | "copyLink"
  | "delete"
  | "lockSurvey"
  | "add"
  | "upload"
  | "copy";

const roleConstant: Record<TRoleName, TRoleID> = {
  all: 11,
  edit: 12,
  view: 13,
  sync: 14,
  exportExcel: 15,
  addSurvey: 16,
  copySurvey: 17,
  copyLink: 18,
  delete: 19,
  lockSurvey: 20,
  add: 21,
  upload: 22,
  copy: 23,
};

export const roleData = {
  [roleGroupConstant.userGroup]: [
    roleConstant.all,
    roleConstant.edit,
    roleConstant.view,
    roleConstant.sync,
  ],
  [roleGroupConstant.userManagement]: [
    roleConstant.all,
    roleConstant.edit,
    roleConstant.view,
    roleConstant.sync,
  ],
  [roleGroupConstant.questionBank]: [
    roleConstant.all,
    roleConstant.add,
    roleConstant.edit,
    roleConstant.view,
    roleConstant.delete,
    roleConstant.upload,
    roleConstant.copy,
  ],
  [roleGroupConstant.surveyList]: [
    roleConstant.all,
    roleConstant.edit,
    roleConstant.view,
    roleConstant.exportExcel,
    roleConstant.addSurvey,
    roleConstant.copySurvey,
    roleConstant.copyLink,
    roleConstant.delete,
    roleConstant.lockSurvey,
  ],
};

export const roleDataDropDown = {
  [roleGroupConstant.userGroup]: [roleConstant.edit, roleConstant.view],
  [roleGroupConstant.userManagement]: [roleConstant.edit, roleConstant.view],
  [roleGroupConstant.questionBank]: [
    roleConstant.edit,
    roleConstant.view,
    roleConstant.delete,
    roleConstant.copy,
  ],
  [roleGroupConstant.surveyList]: [
    roleConstant.edit,
    roleConstant.view,
    roleConstant.exportExcel,
    roleConstant.addSurvey,
    roleConstant.copySurvey,
    roleConstant.copyLink,
    roleConstant.delete,
    roleConstant.lockSurvey,
  ],
};

export const roleName = {
  [roleConstant.all]: "Tất cả",
  [roleConstant.edit]: "Sửa",
  [roleConstant.view]: "Xem",
  [roleConstant.sync]: "Đồng bộ",
  [roleConstant.exportExcel]: "Xuất excel",
  [roleConstant.addSurvey]: "Tạo bài khảo sát",
  [roleConstant.copySurvey]: "Sao chép bài khảo sát",
  [roleConstant.copyLink]: "Sao chép link",
  [roleConstant.delete]: "Xóa",
  [roleConstant.lockSurvey]: "Khóa bài khảo sát",
  [roleConstant.add]: "Thêm",
  [roleConstant.upload]: "Upload",
  [roleConstant.copy]: "Sao chép",
};

export const roleIcon = {
  [roleConstant.edit]: EditIcon,
  [roleConstant.view]: ViewIcon,
  [roleConstant.copySurvey]: CopySurveyIcon,
  [roleConstant.copyLink]: CopyLinkIcon,
  [roleConstant.delete]: DeleteIcon,
  [roleConstant.lockSurvey]: LockIcon,
  [roleConstant.copy]: CopyLinkIcon,
};

export const roleFunction = {
  [roleConstant.edit]: "onEdit",
  [roleConstant.view]: "onView",
  [roleConstant.copySurvey]: "onCopySurvey",
  [roleConstant.copyLink]: "onCopyLink",
  [roleConstant.delete]: "onDelete",
  [roleConstant.lockSurvey]: "onLockSurvey",
  [roleConstant.copy]: "onCopy",
};
export const roleHasModal = {
  [roleConstant.edit]: false,
  [roleConstant.view]: false,
  [roleConstant.copySurvey]: false,
  [roleConstant.copyLink]: false,
  [roleConstant.delete]: true,
  [roleConstant.lockSurvey]: true,
  [roleConstant.copy]: false,
};
export const onDeleteFunc = "onDelete";
