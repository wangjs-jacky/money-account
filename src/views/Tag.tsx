import { Button } from "components/Button";
import { Center } from "components/Center";
import { Icon } from "components/Icon";
import { Input } from "components/Input";
import { Layout } from "components/Layout";
import { Space } from "components/Space";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useTags } from "useTags";

const Topbar = styled.header`
  display: flex;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
  justify-content: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  span {
    font-size: 20px;
  }
  > .icon {
    position: absolute;
    left: 0;
    padding: 0 8px;
  }
`;

const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;

export const Tag: React.FC = () => {
  let { tagId } = useParams();
  const { tags, findTag, updatetag, deleteTag } = useTags();
  const tagName = findTag(tagId as string);
  const tagContent = () => (
    <>
      <InputWrapper>
        <Input
          label="标签名"
          type="text"
          placeholder="标签名"
          value={tagName}
          onChange={(e) => {
            updatetag(tagId as string, e.target.value);
          }}
        ></Input>
      </InputWrapper>
      <Space />
      <Space />
      <Space />
      <Center>
        <Button
          onClick={() => {
            deleteTag(tagId as string);
            navigate(-1);
          }}
        >
          {" "}
          删除标签
        </Button>
      </Center>
    </>
  );
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };
  return (
    <Layout>
      <Topbar>
        <Icon tag="left" onClick={onClickBack}></Icon>
        <span>编辑标签</span>
      </Topbar>
      {tagName ? tagContent() : <Center> tag 不存在</Center>}
    </Layout>
  );
};
