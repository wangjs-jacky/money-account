import { Button } from "components/Button";
import { Center } from "components/Center";
import { Icon } from "components/Icon";
import { Layout } from "components/Layout";
import { Space } from "components/Space";
import { useTags } from "hooks/useTags";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

export function Tags() {
  const { tags, setTags,onAddTag } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map((tag, index) => (
          <li key={tag.id}>
            <Link to={"/tags/" + tag.id}>
              <span>{tag.id}--{tag.name}</span>
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
