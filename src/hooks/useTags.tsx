import { createId } from "lib/createId";
import { useEffect, useState } from "react";
import { useUpdate } from "./useUpdate";

export type TagType = {
  id: string;
  name: string;
};

// 自定义 Hooks
export const useTags = () => {
  const [tags, setTags] = useState<TagType[]>([]);
  // 读缓存，如果没有，就把 衣食住行 存进去。
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]");
    if (localTags.length === 0) {
      localTags = [
        { id: createId(), name: "网易云" },
        { id: createId(), name: "手机充值" },
        { id: createId(), name: "自助餐" },
        { id: createId(), name: "购买课程" },
        { id: createId(), name: "收入" },
      ];
    }
    setTags(localTags);
  }, []);

  // 如果 tags 变化了，则存入 localStorage
  // 在 依赖数组 tags 从 undefined => [] 被错算为一次变化
  useUpdate(() => {
    window.localStorage.setItem("tags", JSON.stringify(tags));
  }, [tags]);

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
  const updatetag = (tagId: string, newTagName: string) => {
    setTags(
      tags.map((tag) =>
        tag.id === tagId ? { id: tagId, name: newTagName } : tag
      )
    );
  };
  const deleteTag = (tagId: string) => {
    setTags(tags.filter((tag) => tag.id !== tagId));
  };
  return { tags, setTags, onAddTag, findTag, updatetag, deleteTag };
};
