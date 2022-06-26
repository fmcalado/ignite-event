export interface Lesson {
  id: string;
  title: string;
  slug: string;
  availableAt: string;
  lessonType: 'live' | 'class';
}