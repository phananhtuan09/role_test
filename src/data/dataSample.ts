import {
  CopyLinkIcon,
  EditIcon,
  DeleteIcon,
  LockIcon,
  ViewIcon,
  CopySurveyIcon,
} from "../icons";
export const roleData = {
  5: [11, 12, 13, 14],
  6: [11, 12, 13, 14],
  7: [11, 21, 12, 13, 19, 22, 23],
  8: [11, 12, 13, 15, 16, 17, 18, 19, 20],
};

export const rolePageVariable: Record<string, string> = {
  userGroup: "Quản lý nhóm người dùng",
  userManagement: "Quản lý người dùng",
  questionBank: "Ngân hàng câu hỏi",
  surveyList: "Bài khảo sát",
};
export const rolePages = {
  5: "Quản lý nhóm người dùng",
  6: "Quản lý người dùng",
  7: "Ngân hàng câu hỏi",
  8: "Bài khảo sát",
};

export const roleTitle = {
  11: "Tất cả",
  12: "Sửa",
  13: "Xem",
  14: "Đồng bộ",
  15: "Xuất excel",
  16: "Tạo bài khảo sát",
  17: "Sao chép bài khảo sát",
  18: "Sao chép link",
  19: "Xóa",
  20: "Khóa bài khảo sát",
  21: "Thêm",
  22: "Upload",
  23: "Sao chép",
};

export const roleIcon = {
  12: EditIcon,
  13: ViewIcon,
  17: CopySurveyIcon,
  18: CopyLinkIcon,
  19: DeleteIcon,
  20: LockIcon,
  23: CopyLinkIcon,
};

export const roleFunction = {
  12: "onEdit",
  13: "onView",
  17: "onCopySurvey",
  18: "onCopyLink",
  19: "onDelete",
  20: "onLockSurvey",
  23: "onCopy",
};
export const roleHasModal = {
  12: false,
  13: false,
  17: false,
  18: false,
  19: true,
  20: true,
  23: false,
};
