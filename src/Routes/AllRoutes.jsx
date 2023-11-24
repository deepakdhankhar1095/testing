import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import SubEventPage from "../pages/SubEventPage";
import EventDetails from "../pages/EventDetails";
import SearchEvent from "../pages/SearchEvent";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/subevent/:title" element={<SubEventPage />} />
      <Route path="/eventDetails" element={<EventDetails />} />
      <Route path="/searchEvent" element={<SearchEvent />} />
    </Routes>
  );
};

export default AllRoutes;
