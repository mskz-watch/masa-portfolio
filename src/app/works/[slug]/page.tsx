import { notFound } from "next/navigation";
import WorksKarappoPage from "@/components/pages/WorksKarappoPage";
import WorksSkilllogPage from "@/components/pages/WorksSkilllogPage";

const slugs = ["karappo", "skilllog"];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  if (params.slug === "karappo") return <WorksKarappoPage />;
  if (params.slug === "skilllog") return <WorksSkilllogPage />;
  notFound();
}
