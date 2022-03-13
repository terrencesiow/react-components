import { useSelector, useDispatch } from 'react-redux';

import {
     closeSidebar,
     toggleSidebar,
} from '../../redux/sidebar/sidebar_actions';

import './ExpendableSideBar.scss';

const ExpendableSidebar = () => {
     const { sidebarOpen } = useSelector((state) => state.sidebar);
     const dispatch = useDispatch();

     return (
          <div className="sidebar_container">
               <div
                    className={`${
                         sidebarOpen
                              ? 'sidebar_container sidebar'
                              : 'sidebar_container sidebar sidebar--hide'
                    }`}
               >
                    <div
                         className={`${
                              sidebarOpen
                                   ? 'sidebar_container sidebar__content'
                                   : 'sidebar_container sidebar__content sidebar__content--hide'
                         }`}
                    ></div>
               </div>
               <div
                    className={`${
                         sidebarOpen
                              ? 'sidebar_container button'
                              : 'sidebar_container button button--move'
                    }`}
                    onClick={() => {
                         sidebarOpen
                              ? dispatch(closeSidebar())
                              : dispatch(toggleSidebar());
                    }}
               ></div>
          </div>
     );
};

export default ExpendableSidebar;
