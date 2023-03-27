import Attendance from "../Pages/Attendance";
import NoticeBoard from "../Pages/NoticeBoard";
import Notices from "../Pages/Notices";
import Schedule from "../Pages/Schedule";
import Professors from "../Pages/Professors";
import Reports from "../Pages/Reports";
import Form from "../Pages/form";

const routes = [
  { path: "/Attendance", component: <Attendance /> },
  { path: "/NoticeBoard", component: <NoticeBoard /> },
  { path: "/Notices", component: <Notices /> },
  { path: "/Schedule", component: <Schedule /> },
  { path: "/Professors", component: <Professors /> },
  { path: "/Reports", component: <Reports /> },
  { path: "/Professors/form", component: <Form /> }
];

export default routes;
