import { gql, useQuery } from "@apollo/client";
import React from "react";

import { Lesson } from "./lib/types/lesson";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

const App: React.FC = () => {
  const { data, loading } = useQuery<{ lessons: Lesson[]}>(GET_LESSONS_QUERY);

  if (loading) return <div>Carregando...</div>;

  return (
    <>
      {data!.lessons.length > 0 ? (
        <div>
          {data?.lessons.map((lesson) => (
            <h1 key={lesson.id}>{lesson.title}</h1>
          ))}
        </div>
      ) : (
        <h1>Nada por aqui</h1>
      )}
    </>
  );
};

export default App;
