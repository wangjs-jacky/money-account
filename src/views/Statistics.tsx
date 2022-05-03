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

const Item = styled.div`
  font-size: 18px;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  > .tags {
    > span {
      padding-right: 5px;
    }
  }
  > .note {
    margin-left: 16px;
    margin-right: auto;
    color: #999 !important;
  }
`;

export function Statistics() {
  const [category, setCategory] = useState<"+" | "-">("-");
  const { moneyRecords } = useRecords();
  const { findTag } = useTags();
  const selectedRecords = moneyRecords.filter((r) => r.category === category);
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
      {selectedRecords.map((record) => {
        return (
          <Item>
            <div className="tags">
              {record.tagIds.map((tagId) => (
                <span>{findTag(tagId)}</span>
              ))}
            </div>
            {record.note && <div className="note">{record.note}</div>}
            <div className="amount">{"¥" + record.amount}</div>
            {/* <li>{day(record.createAt).format("YYYY年MM月DD日")}</li>
            <li>----------------------------------------</li> */}
          </Item>
        );
      })}
    </Layout>
  );
}
