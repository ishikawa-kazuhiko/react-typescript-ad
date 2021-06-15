import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

/**
 * FCは、関数コンポーネントのこと
 * VFCはchildrenを含まない。FCは暗黙的にchildrenを受け取れる
 */
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
