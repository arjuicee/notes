import { getSubjects } from "@/lib/data";

export async function generateStaticParams({
  params,
}: {
  params: Promise<{ dept: string; sem: string }>;
}) {
  const { dept, sem } = await params;
  const subjects = await getSubjects(dept, sem);

  return subjects.map((subject: string) => ({
    subject: subject.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default function SubjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
