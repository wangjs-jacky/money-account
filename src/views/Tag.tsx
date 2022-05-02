import { Layout } from "components/Layout";
import { useParams } from "react-router-dom";
import { useTags } from "useTags";

export const Tag: React.FC = (props) => {
  let { tagId } = useParams();
  const { tags, findTag } = useTags();
  return <Layout>{findTag(tagId as string)}</Layout>;
};
