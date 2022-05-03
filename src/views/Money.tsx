import { Layout } from "components/Layout";
import { useState } from "react";
import { TagsSection } from "./Money/TagsSection";
import { CategorySection } from "./Money/CategorySection";
import { NotesSection } from "./Money/NotesSection";
import { NumberPadSection } from "./Money/NumberPadSection";
import { useRecords } from "useRecords";

type Category = "-" | "+";

const defaultFormData = {
  tagIds: [] as string[],
  note: "",
  category: "-" as Category,
  amount: "0",
};

export function Money() {
  // 状态： UI 状态以及 筛选状态
  const [selected, setSelected] = useState(defaultFormData);
  const { addRecord } = useRecords();

  // 设计时，需要指定 key 和 value ，即 onChange({key:value})
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({ ...selected, ...obj });
  };

  const submit = () => {
    console.log("onOK click");
    if (addRecord(selected)) {
      console.log("保存成功");
    }
    // 重置状态
    setSelected(defaultFormData);
  };

  return (
    <Layout>
      <TagsSection
        value={selected.tagIds}
        onChange={(tagIds) => onChange({ tagIds: tagIds })}
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
        onOk={submit}
      />
    </Layout>
  );
}
