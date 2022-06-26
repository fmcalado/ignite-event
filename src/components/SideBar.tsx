import React from "react";
import { gql, useQuery } from "@apollo/client";

import LessonCard from "./LessonCard";
import { Lesson } from "../lib/types/lesson";
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
  const { data, loading } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    <aside className="w-[348px] p-6 bg-gray-700 border-l border-gray-600">
      <span className="block font-bold text-2xl pb-6 mb-6 border-b border-gray-500">
        Cronograma de aulas
      </span>

      {/*TODO: IMPLEMENT SKELETON */}

      <div className="flex flex-col gap-8">
        {data?.lessons.map(({ id, title, slug, availableAt, lessonType }) => (
          <LessonCard
            id={id}
            key={id}
            title={title}
            slug={slug}
            availableAt={availableAt}
            lessonType={lessonType}
          />
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
