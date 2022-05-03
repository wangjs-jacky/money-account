import { Layout } from "components/Layout";
import { useRecords } from "hooks/useRecords";
import { useState } from "react";
import styled from "styled-components";
import { CategorySection } from "./Money/CategorySection";

const Wrapper = styled.div`
  ul {
    background-color: #fff !important;
  }
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
`;

export function Statistics() {
  const [category, setCategory] = useState<"+" | "-">("-");
  const { moneyRecords } = useRecords();
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
            <li>{record.tagIds.map(tagId=>(<span>{tagId}</span>))}</li>
            <li>{record.note}</li>
            <li>{record.amount}</li>
            <li>{record.createAt}</li>
            <li>----------</li>
          </>
        );
      })}
    </Layout>
  );
}
