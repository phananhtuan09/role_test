import { useRoutes, Outlet } from "react-router-dom";
import React from "react";
const UserGroup = React.lazy(() => import("../pages/userGroup"));
const UserManagement = React.lazy(() => import("../pages/userManagement"));
const QuestionBank = React.lazy(() => import("../pages/questionBank"));
const Survey = React.lazy(() => import("../pages/survey"));
const App = React.lazy(() => import("../App"));

const UseRouter: React.FC = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <React.Suspense fallback={<>...</>}>
          <App />
        </React.Suspense>
      ),
      children: [
        {
          path: "",
          element: <Outlet />,
        },
      ],
    },
    {
      path: "/userGroup",
      element: (
        <React.Suspense fallback={<>...</>}>
          <UserGroup />
        </React.Suspense>
      ),
      children: [
        {
          path: "",
          element: <Outlet />,
        },
      ],
    },
    {
      path: "/userManagement",
      element: (
        <React.Suspense fallback={<>...</>}>
          <UserManagement />
        </React.Suspense>
      ),
      children: [
        {
          path: "",
          element: <Outlet />,
        },
      ],
    },
    {
      path: "/question-bank",
      element: (
        <React.Suspense fallback={<>...</>}>
          <QuestionBank />
        </React.Suspense>
      ),
      children: [
        {
          path: "",
          element: <Outlet />,
        },
      ],
    },
    {
      path: "/survey",
      element: (
        <React.Suspense fallback={<>...</>}>
          <Survey />
        </React.Suspense>
      ),
      children: [
        {
          path: "",
          element: <Outlet />,
        },
      ],
    },
  ]);
  return routes;
};
export default UseRouter;
