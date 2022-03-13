import { TOGGLE_EXP_SIDE_BAR, CLOSE_SIDEBAR } from './sidebar_types';

const initialState = {
     sidebarOpen: true,
};

const sidebarReducer = (state = initialState, { type }) => {
     switch (type) {
          case TOGGLE_EXP_SIDE_BAR:
               return {
                    ...state,
                    sidebarOpen: !state.sidebarOpen,
               };
          case CLOSE_SIDEBAR:
               return {
                    ...state,
                    sidebarOpen: false,
               };
          default:
               return state;
     }
};

export default sidebarReducer;
