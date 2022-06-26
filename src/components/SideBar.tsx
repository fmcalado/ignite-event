import React from "react";
import { gql, useQuery } from "@apollo/client";

import LessonCard from "./LessonCard";
import { LessonResponse } from "../lib/types/lesson";
const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;

const SideBar: React.FC = () => {
  const { data, loading } = useQuery<LessonResponse>(GET_LESSONS_QUERY);

  const renderLessons = () => {
    /*TODO: IMPLEMENT SKELETON */
    if (loading) return <h1>Carregando...</h1>;

    /*TODO: SHOW EMPTY DATA VIEW */
    if (data!.lessons.length <= 0 || data === undefined )
      return <h1>Nada por aqui</h1>;

    return data.lessons.map(({ id, availableAt, ...rest }) => (
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
