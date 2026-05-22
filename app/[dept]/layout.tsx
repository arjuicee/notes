export function generateStaticParams() {
  return [{ dept: "cse" }, { dept: "ece" }, { dept: "it" }];
}

export default function DeptLayout({ children }: { children: React.ReactNode }) {
  return children;
}
