import { Route, Routes } from "react-router-dom";

import EventPage from "./pages/Event";
import HomePage from "./pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/event" element={<EventPage />}/>
    </Routes>
  )  
}

export default Router;
