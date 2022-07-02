import React from "react";

import Header from "../components/Header";
import SideBar from "../components/SideBar";
import VideoFrame from "../components/VideoFrame";

const EventPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <VideoFrame />
        <SideBar />
      </main>
    </div>
  );
};

export default EventPage;
