import { notFound } from "next/navigation";
import { works } from "@/data/works";
import WorkDetailClient from "./WorkDetailClient";

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const work = works.find((w) => w.slug === params.slug);
  if (!work) notFound();
  return <WorkDetailClient work={work} allWorks={works} />;
}
