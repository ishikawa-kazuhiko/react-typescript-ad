import { VFC } from "react";
import { TodoType } from "./types/todo";
//ここのTodoTypeは、idが不要

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};

// export const Todo = (
//   // props: Pick<TodoType, "userId" | "title" | "completed"> //必要な変数のみ取得する書き方
//   props: Omit<TodoType, "id"> //idを除いた場合の書き方
// ) => {
//   const { title, userId, completed = false } = props;
//   const completeMark = completed ? "[完]" : "[未]";
//   return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
// };
