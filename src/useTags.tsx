import { useState } from "react";

export type TagType = {
  id: string;
  name: string;
};

const defaultValue = [
  { id: "1", name: "衣" },
  { id: "2", name: "食" },
  { id: "3", name: "住" },
  { id: "4", name: "行" },
  { id: "9", name: "跑" },
];

// 自定义 Hooks
export const useTags = () => {
  const [tags, setTags] = useState<TagType[]>(defaultValue);
  const onAddTag = () => {
    const tagName = window.prompt("请输入新的标签：");
    if (tagName !== null) {
      setTags([...tags, { id: Math.random.toString(), name: tagName }]);
    }
  };
  return { tags, setTags, onAddTag };
};
