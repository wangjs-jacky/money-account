import { useState } from "react";
import styled from "styled-components";

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
  onChange: (x:string[]) => void;
};

export const TagsSection: React.FC<Props> = ({value,onChange}) => {
  const [tags, setTags] = useState(["衣", "食", "住", "行"]);
  const selectedTag = value;
  const onAddTag = () => {
    const tagName = window.prompt("请输入新的标签：");
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };

  const onToggleTag = (tag: string) => {
    const index = selectedTag.indexOf(tag);
    if (index >= 0) {
      const _selectedTag = selectedTag.slice(0);
      _selectedTag.splice(index, 1);
      onChange(_selectedTag);
    } else {
      onChange([...selectedTag, tag]);
    }
  };

  const getClass = (tag: string) =>
    selectedTag.indexOf(tag) >= 0 ? "selected" : "";
  return (
    <Wrapper>
      <ol>
        {tags.map((tag) => (
          <li
            key={tag}
            className={getClass(tag)}
            onClick={() => {
              onToggleTag(tag);
            }}
          >
            {tag}
          </li>
        ))}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};
