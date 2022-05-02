import { createId } from "lib/createId";
import { useState } from "react";

export type TagType = {
  id: string;
  name: string;
};

const defaultValue = [
  { id: createId(), name: "衣" },
  { id: createId(), name: "食" },
  { id: createId(), name: "住" },
  { id: createId(), name: "行" },
  { id: createId(), name: "跑" },
];

// 自定义 Hooks
export const useTags = () => {
  const [tags, setTags] = useState<TagType[]>(defaultValue);
  const onAddTag = () => {
    const tagName = window.prompt("请输入新的标签：");
    if (tagName === "") return;
    if (tagName !== null) {
      setTags([...tags, { id: createId(), name: tagName }]);
    }
  };
  const findTag = (tagId: string) => {
    let tag = tags.find((tag) => tag.id === tagId);
    return tag?.name;
  };
  return { tags, setTags, onAddTag, findTag };
};
