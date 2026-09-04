import Link from "next/link";

const subjects = [
  {
    name: "Overall",
    url: "https://example.com/overall",
  },
  {
    name: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 1",
    url: "https://example.com/maths-1",
  },
  {
    name: "NETWORK THEORY",
    url: "https://example.com/network-theory",
  },
  {
    name: "PHYSICS FOR ELECTRICAL SCIENCE",
    url: "https://example.com/physics",
  },
  {
    name: "CHEMISTRY FOR INFORMATION SCIENCE & ELECTRICAL SCIENCE",
    url: "https://example.com/chemistry",
  },
  {
    name: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING",
    url: "https://example.com/egcad",
  },
  {
    name: "ENGINEERING MECHANICS",
    url: "https://example.com/mechanics",
  },
  {
    name: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING",
    url: "https://example.com/ieee",
  },
  {
    name: "INTRODUCTION TO MECHANICAL ENGINEERING & CIVIL ENGINEERING",
    url: "https://example.com/imce",
  },
  {
    name: "ALGORITHMIC THINKING WITH PYTHON",
    url: "https://example.com/python",
  },
  {
    name: "FOUNDATIONS OF COMPUTING: FROM HARDWARE ESSENTIALS TO WEB DESIGN",
    url: "https://example.com/computing",
  },
  {
    name: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2",
    url: "https://example.com/maths-2",
  },
  {
    name: "PROGRAMMING IN C",
    url: "https://example.com/c",
  },
  {
    name: "ENGINEERING ETHICS AND SUSTAINABLE DEVELOPMENT",
    url: "https://example.com/ethics",
  },
];

export default async function SyllabusSemesterPage({
  params,
}: {
  params: Promise<{
    dept: string;
    scheme: string;
    semester: string;
  }>;
}) {
  const { dept, scheme, semester } = await params;

  const isECE2025Semester12 =
    dept === "ece" &&
    scheme === "2025" &&
    (semester === "1-2" || semester === "1%2D2");

  return (
    <main className="w-full flex flex-col items-center px-4 py-6 sm:px-6">
      <div className="w-full max-w-6xl">
        <div className="mb-6">
          <Link
            href={`/${dept}/syllabus/${scheme}`}
            className="text-sm text-white/70 hover:text-white"
          >
            ← Back
          </Link>

          <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
            {dept.toUpperCase()} — {scheme} Scheme
          </h1>

          <p className="mt-1 text-white/70">
            Semester {semester}
          </p>
        </div>

        {!isECE2025Semester12 ? (
          <div className="text-center text-white/70 py-10">
            Subject-wise syllabus is not available for this semester.
          </div>
        ) : (
          <section
            aria-label="Subjects"
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              gap-3
              sm:gap-8
              w-full
              max-w-6xl
            "
          >
            {subjects.map((subject) => (
              <a
                key={subject.name}
                href={subject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  w-full
                  min-h-[72px]
                  px-4
                  py-3
                  sm:px-6
                  sm:py-4
                  bg-black/80
                  border
                  border-white/20
                  rounded-xl
                  overflow-hidden
                  cursor-pointer
                  active:opacity-80
                "
              >
                <span className="text-white text-base sm:text-lg font-semibold text-center break-words">
                  {subject.name}
                </span>
              </a>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
