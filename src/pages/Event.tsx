import React from "react";
import { useQuery } from "@apollo/client";

import Header from "../components/Header";
import VideoSection from "../components/VideoSection";
import LessonCard from "../components/LessonCard";
import {
  GET_LESSONS_QUERY,
} from "../lib/queries";
import {
  LessonResponse,
} from "../lib/types/lesson";
import "@vime/core/themes/default.css";

const EventPage: React.FC = () => {
  const { data, loading } = useQuery<LessonResponse>(GET_LESSONS_QUERY);

  const renderLessons = () => {
    /*TODO: IMPLEMENT SKELETON */
    if (loading) return <h1>Carregando...</h1>;

    /*TODO: SHOW EMPTY DATA VIEW */
    if (data!.lessons.length <= 0 || data === undefined)
      return <h1>Nada por aqui</h1>;

    return data.lessons.map(({ id, availableAt, ...rest }) => (
      <LessonCard
        key={id}
        lesson={{ availableAt: new Date(availableAt), ...rest }}
      />
    ));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {/** VIDEO SECTION **/}
        <div className="flex-1">
          <VideoSection />
        </div>

        {/** SIDEBAR **/}
        <aside className="w-[348px] p-6 bg-gray-700 border-l border-gray-600">
          <span className="block font-bold text-2xl pb-6 mb-6 border-b border-gray-500">
            Cronograma de aulas
          </span>

          <div className="flex flex-col gap-8">{renderLessons()}</div>
        </aside>
      </main>
    </div>
  );
};

export default EventPage;
