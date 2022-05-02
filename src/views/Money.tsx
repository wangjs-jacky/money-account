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

  return (
    <Layout>
      <TagsSection
        value={selected.tags}
        onChange={(tags: string[]) => {
          setSelected({ ...selected, tags: tags });
        }}
      />
      <NotesSection
        value={selected.note}
        onChange={(note: string) => {
          setSelected({ ...selected, note: note });
        }}
      />
      <CategorySection
        value={selected.category}
        onChange={(category: Category) => {
          setSelected({ ...selected, category: category });
        }}
      />
      <NumberPadSection 
      value={selected.amount} 
      onChange={(amount:string)=>{
        setSelected({ ...selected, amount: amount });
      }}/>
    </Layout>
  );
}
