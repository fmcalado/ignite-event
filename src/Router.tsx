import { Route, Routes } from "react-router-dom";

import EventPage from "./pages/Event";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<HomePage />}/>
      <Route path="/event" element={<EventPage />}/>
      <Route path="/event/lessons/:lesson_slug" element={<EventPage />}/>
    </Routes>
  )  
}

export default Router;
