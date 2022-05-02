import { useState } from "react";
import styled from "styled-components";
import { useTags } from "useTags";
import { TagType } from "useTags";

const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0 -12px;
    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected {
        background-color: #f60;
      }
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;

type Props = {
  value: string[];
  onChange: (x: string[]) => void;
};

export const TagsSection: React.FC<Props> = ({ value, onChange }) => {
  const { tags, setTags, onAddTag } = useTags();
  const selectedTagIds = value;

  const onToggleTag = (tagId: string) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      const _selectedTagIds = selectedTagIds.slice(0);
      _selectedTagIds.splice(index, 1);
      onChange(_selectedTagIds);
    } else {
      onChange([...selectedTagIds, tagId]);
    }
  };

  const getClass = (tagId: string) =>
    selectedTagIds.indexOf(tagId) >= 0 ? "selected" : "";
  return (
    <Wrapper>
      <ol>
        {tags.map((tag) => (
          <li
            key={tag.id}
            className={getClass(tag.id)}
            onClick={() => {
              onToggleTag(tag.id);
            }}
          >
            {tag.name}
          </li>
        ))}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};
