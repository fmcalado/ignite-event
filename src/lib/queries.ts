import { gql } from "@apollo/client";

export const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
      videoId
    }
  }
`;

export const GET_LESSON_BY_SLUG_QUERY = gql`
  query ($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`;

export const GET_DEFAULT_LESSON_QUERY = gql`
  query Test {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED, first: 1) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`;
