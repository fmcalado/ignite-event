export interface LessonResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    videoId: string;
    availableAt: string;
    lessonType: "live" | "class";
  }[];
}
export interface LessonContent {
  title: string;
  videoId: string;
  description: string;
  teacher: {
    bio: string;
    avatarURL: string;
    name: string;
  }
}

export interface LessonBySlugResponse {
  lesson: LessonContent;
}
export interface DefaultLessonResponse {
  lessons: LessonContent[];
}


