import { Layout } from "components/Layout";
import { useRecords } from "hooks/useRecords";
import { useTags } from "hooks/useTags";
import { useState } from "react";
import styled from "styled-components";
import { CategorySection } from "./Money/CategorySection";
import day from "dayjs";

const Wrapper = styled.div`
  ul {
    background-color: #fff !important;
  }
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
`;

export function Statistics() {
  const [category, setCategory] = useState<"+" | "-">("-");
  const { moneyRecords } = useRecords();
  const { findTag } = useTags();
  return (
    <Layout>
      <Wrapper>
        <CategorySection
          value={category}
          onChange={(category) => {
            setCategory(category);
          }}
        />
      </Wrapper>
      {moneyRecords.map((record) => {
        return (
          <>
            <li>
              {record.tagIds.map((tagId) => (
                <span>{findTag(tagId)}</span>
              ))}
            </li>
            <li>{record.note}</li>
            <li>{record.amount}</li>
            <li>{day(record.createAt).format("YYYY年MM月DD日")}</li>
            <li>----------</li>
          </>
        );
      })}
    </Layout>
  );
}
