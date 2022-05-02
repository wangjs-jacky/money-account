import { Layout } from "components/Layout";
import { useState } from "react";
import { TagsSection } from "./Money/TagsSection";
import { CategorySection } from "./Money/CategorySection";
import { NotesSection } from "./Money/NotesSection";
import { NumberPadSection } from "./Money/NumberPadSection";

type Category = "-" | "+";

export function Money() {
  // 状态： UI 状态以及 筛选状态
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: "",
    category: "-" as Category,
    amount: "0",
  });

  // 设计时，需要指定 key 和 value ，即 onChange({key:value})
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({ ...selected, ...obj });
  };

  return (
    <Layout>
      <TagsSection
        value={selected.tags}
        onChange={(tags) => onChange({ tags: tags })}
      />
      <NotesSection
        value={selected.note}
        onChange={(note) => onChange({ note: note })}
      />
      <CategorySection
        value={selected.category}
        onChange={(category) => onChange({ category: category })}
      />
      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => onChange({ amount: amount })}
      />
    </Layout>
  );
}
