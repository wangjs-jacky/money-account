import { Layout } from "components/Layout";
import { RecordItem, useRecords } from "hooks/useRecords";
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
  font-size: 16px;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  > .tags {
    width: 20vw;
    > span {
      padding-right: 5px;
    }
  }
  > .note {
    flex: 1;
    color: #999 !important;
  }
`;

const HashItem = styled.div`
  border: 1px solid #000;
  border-radius: 5px;
  margin: 5px 10px;
  padding: 3px;
  h3 {
    margin: 5px;
  }
`;

const Content = styled.div`
  padding: 10px 0px;
  flex: 1;
  overflow: auto;
`;

export function Statistics() {
  const [category, setCategory] = useState<"+" | "-">("-");
  const { moneyRecords } = useRecords();
  const { findTag } = useTags();
  // 重构 record item 数据结构 ，以 daystring 作为 key：
  const hash: { [dateString: string]: RecordItem[] } = {};
  const selectedRecords = moneyRecords.filter((r) => r.category === category);
  selectedRecords.forEach((r) => {
    const key = r.createAt;
    hash[key] = hash[key] || [];
    hash[key].push(r);
  });

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
      <Content>
        {Object.entries(hash).map(([date, records]) => (
          <HashItem key={date}>
            <h3>{day(date).format("YYYY年MM月DD日")}</h3>
            {records.map((record, index) => {
              return (
                <Item key={index}>
                  <div className="tags">
                    {record.tagIds.map((tagId) => (
                      <span key={tagId}>{findTag(tagId)||"TAG已删"}</span>
                    ))}
                  </div>
                  {record.note && <div className="note">{record.note}</div>}
                  <div className="amount">{"¥" + record.amount}</div>
                </Item>
              );
            })}
          </HashItem>
        ))}
      </Content>
    </Layout>
  );
}
