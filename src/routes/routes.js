import MainPage from "../features/Dashboard";
import BranchPage from "../features/Branch";

export const routes = [
  {
    path: "/",
    exact: true,
    main: BranchPage,
  },
  {
    path: "/branch",
    main: MainPage,
  },
];
