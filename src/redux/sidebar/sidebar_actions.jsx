import { TOGGLE_EXP_SIDE_BAR, CLOSE_SIDEBAR } from "./sidebar_types";

export const toggleSidebar = () => {
  return { type: TOGGLE_EXP_SIDE_BAR };
};

export const closeSidebar = () => {
  return { type: CLOSE_SIDEBAR };
};
