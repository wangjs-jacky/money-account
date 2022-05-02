import { Icon } from "components/Icon";
import { Layout } from "components/Layout";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTags } from "useTags";

require("icons/right.svg");

const TagList = styled.ol`
  font-size: 16px;
  > li {
    margin: 0 15px;
    border-bottom: 1px solid #d5d5d9;
    line-height: 16px;
    > a {
      padding: 8px 16px 8px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Button = styled.button`
  font-size: 14px;
  border: none;
  padding: 8px 12px;
  background: #262222;
  border-radius: 4px;
  color: #fff !important;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Space = styled.div`
  height: 16px;
`;

export function Tags() {
  const { tags, setTags,onAddTag } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map((tag, index) => (
          <li key={tag.id}>
            <Link to={"/tags/" + tag.id}>
              <span>{tag.name}</span>
              <Icon tag="right" />
            </Link>
          </li>
        ))}
      </TagList>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button onClick={onAddTag}> 新增标签 </Button>
      </Center>
    </Layout>
  );
}
