export function generateStaticParams() {
  const semesters = ['1', '2', '3', '4', '5', '6', '7', '8'];
  return semesters.map((sem) => ({ sem }));
}

export default function SemPyqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
