import Link from "next/link";

const subjects = [
  {
    name: "Overall",
    url: "https://drive.google.com/file/d/1rEu6zwBG9HJ_0RKPyzpNPj5Y10esTPbV/view?usp=drive_link",
  },
  {
    name: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 1",
    url: "https://drive.google.com/file/d/1HCLC-WiHJ1Vyxlrnu5WT3YozJ4Cjo7rz/view?usp=drive_link",
  },
  {
    name: "NETWORK THEORY",
    url: "https://drive.google.com/file/d/1ioglKUciqPIYitkjzIqExcdoDvY15LxF/view?usp=drive_link",
  },
  {
    name: "PHYSICS FOR ELECTRICAL SCIENCE",
    url: "https://drive.google.com/file/d/1lH6WKCbVqPRdLQtAPx3s2-DGyGvsjWLi/view?usp=drive_link",
  },
  {
    name: "CHEMISTRY FOR INFORMATION SCIENCE & ELECTRICAL SCIENCE",
    url: "https://drive.google.com/file/d/1JhHwWZjvi86nFyBaebKEy67yFpz02395/view?usp=drive_link",
  },
  {
    name: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING",
    url: "https://drive.google.com/file/d/1kzY8YlnKaZg3vJiTZDZRj-xUPgT6YXNn/view?usp=drive_link",
  },
  {
    name: "ENGINEERING MECHANICS",
    url: "https://drive.google.com/file/d/1wqyVkTP1cOR1D23hxJY3DyVgEwRDdJNu/view?usp=drive_link",
  },
  {
    name: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING",
    url: "https://drive.google.com/file/d/1m11tfh7ZtPctX7cBDytmhSHkbiTcN46J/view?usp=drive_link",
  },
  {
    name: "INTRODUCTION TO MECHANICAL ENGINEERING & CIVIL ENGINEERING",
    url: "https://drive.google.com/file/d/1uP3Q06k7nNxSmsEDQX_jDPh_gWak1c9G/view?usp=drive_link",
  },
  {
    name: "ALGORITHMIC THINKING WITH PYTHON",
    url: "https://drive.google.com/file/d/1y5SAX0u5rYjt3BT5ht4XVEr9Xff2u6BO/view?usp=drive_link",
  },
  {
    name: "FOUNDATIONS OF COMPUTING: FROM HARDWARE ESSENTIALS TO WEB DESIGN",
    url: "https://drive.google.com/file/d/1X83cuVyLEHglThOOdvQoozkIwx-iFppS/view?usp=drive_link",
  },
  {
    name: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 2",
    url: "https://drive.google.com/file/d/1BX-1wJq0YCuC8BwPU7iZqkjOrN50fUK0/view?usp=drive_link",
  },
  {
    name: "PROGRAMMING IN C",
    url: "https://drive.google.com/file/d/11c2sLgdEz6UuA_38Q195jtaOOS5lL2pJ/view?usp=drive_link",
  },
  {
    name: "ENGINEERING ETHICS AND SUSTAINABLE DEVELOPMENT",
    url: "https://drive.google.com/file/d/18gr2iEAggi8_HWHx9casLD7PWVye7KeZ/view?usp=drive_link",
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
