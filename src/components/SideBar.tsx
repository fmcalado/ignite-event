import React from "react";

import LessonCard from "./LessonCard";
import { LessonResponse } from "../lib/types/lesson";

interface SideBarProps {
  lessonsData: LessonResponse | undefined;
  loadingLessons: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ lessonsData, loadingLessons }) => {
  const renderLessons = () => {
    /*TODO: IMPLEMENT SKELETON */
    if (loadingLessons) return <h1>Carregando...</h1>;

    /*TODO: SHOW EMPTY DATA VIEW */
    if (lessonsData!.lessons.length <= 0 || lessonsData === undefined)
      return <h1>Nada por aqui</h1>;

    return lessonsData.lessons.map(({ id, availableAt, ...rest }) => (
      <LessonCard
        key={id}
        lesson={{ availableAt: new Date(availableAt), ...rest }}
      />
    ));
  };

  return (
    <aside className="w-[348px] p-6 bg-gray-700 border-l border-gray-600">
      <span className="block font-bold text-2xl pb-6 mb-6 border-b border-gray-500">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">{renderLessons()}</div>
    </aside>
  );
};

export default SideBar;
