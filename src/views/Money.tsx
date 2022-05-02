import { Layout } from "components/Layout";
import { CategorySection } from "./Money/CategorySection";
import { NotesSection } from "./Money/NotesSection";
import { NumberPadSection } from "./Money/NumberPadSection";
import { TagsSection } from "./Money/TagsSection";

export function Money() {
  return (
    <Layout>
      <TagsSection />
      <NotesSection />
      <CategorySection />
      <NumberPadSection />
    </Layout>
  );
}
