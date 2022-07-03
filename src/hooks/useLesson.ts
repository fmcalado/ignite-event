import { useQuery } from "@apollo/client";

import {
  GET_DEFAULT_LESSON_QUERY,
  GET_LESSON_BY_SLUG_QUERY,
} from "../lib/queries";
import {
  DefaultLessonResponse,
  LessonBySlugResponse,
  LessonContent,
} from "../lib/types/lesson";

export const useLesson = (slug: string | undefined) => {
  if (slug === undefined) {
    const { data, loading } = useQuery<DefaultLessonResponse>(
      GET_DEFAULT_LESSON_QUERY
    );
    if (loading) return { data: undefined, loading: true };

    return {
      data: {
        lesson: data?.lessons[0] as LessonContent,
      } as LessonBySlugResponse,
      loading,
    };
  }

  const { data, loading } = useQuery<LessonBySlugResponse>(
    GET_LESSON_BY_SLUG_QUERY,
    {
      variables: {
        slug,
      },
    }
  );
  if (loading) return { data: undefined, loading: true };
  
  return { data, loading };
};
