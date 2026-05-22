import { getPyqSubjects } from "@/lib/data";

export async function generateStaticParams({
  params,
}: {
  params: Promise<{ dept: string; sem: string; subject: string }> | { dept: string; sem: string; subject: string };
}) {
  const { dept, sem } = await params;
  const subjects = await getPyqSubjects(dept, sem);

  return subjects.map((subject: string) => ({
    subject: subject.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default function PyqSubjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
