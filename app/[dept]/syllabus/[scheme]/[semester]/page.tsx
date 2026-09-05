import Link from "next/link";

const subjects = {
  ece: [
    {
      name: "FULL ECE SYLLABUS",
      url: "https://drive.google.com/file/d/1rEu6zwBG9HJ_0RKPyzpNPj5Y10esTPbV/view?usp=drive_link",
    },
    {
      name: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE – 1",
      url: "https://drive.google.com/file/d/1HCLC-WiHJ1Vyxlrnu5WT3YozJ4Cjo7rz/view?usp=drive_link",
    },
    {
      name: "NETWORK THEORY (CORE)",
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
  ],

  cse: [
    {
      name: "FULL CSE SYLLABUS",
      url: "https://drive.google.com/file/d/1n19Rk0KdKSKzv8uvbJ3KoZaoQ1ImkujI/view?usp=drive_link",
    },
    {
      name: "MATHEMATICS FOR INFORMATION SCIENCE – 1",
      url: "https://drive.google.com/file/d/1rM2zFrXBdzYuMEBeoESXDd1WPYajdptV/view?usp=drive_link",
    },
    {
      name: "PHYSICS FOR INFORMATION SCIENCE",
      url: "https://drive.google.com/file/d/1Ftl_oDreSWC1-4J51wouxWUTqphRKtvV/view?usp=drive_link",
    },
    {
      name: "CHEMISTRY FOR INFORMATION SCIENCE & ELECTRICAL SCIENCE",
      url: "https://drive.google.com/file/d/1ItsvieI5i2_71VZvI90zCYReq0rcX0Vn/view?usp=drive_link",
    },
    {
      name: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING",
      url: "https://drive.google.com/file/d/1kQewgQYkXw3gtG9i-vqTeT3N1JFRehDg/view?usp=drive_link",
    },
    {
      name: "ENGINEERING MECHANICS",
      url: "https://drive.google.com/file/d/13lmCiG5d5xjYzdClcxPWaGGoGsAkP-0y/view?usp=drive_link",
    },
    {
      name: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING",
      url: "https://drive.google.com/file/d/1Lfx7tXFqYZVkRN1onSS7p0XqT06Hib-I/view?usp=drive_link",
    },
    {
      name: "INTRODUCTION TO MECHANICAL ENGINEERING & CIVIL ENGINEERING",
      url: "https://drive.google.com/file/d/1JP4--FOwqFbiE2GDOxa0hYK4a8DSIMPj/view?usp=drive_link",
    },
    {
      name: "ALGORITHMIC THINKING WITH PYTHON",
      url: "https://drive.google.com/file/d/19dBbvAZViYJLdm2Jzj8wo6Cao8b1miiT/view?usp=drive_link",
    },
    {
      name: "FOUNDATIONS OF COMPUTING: FROM HARDWARE ESSENTIALS TO WEB DESIGN",
      url: "https://drive.google.com/file/d/1PQXj9Ul-v6XKe40_96AT8SEwbcYmBj5c/view?usp=drive_link",
    },
    {
      name: "MATHEMATICS FOR INFORMATION SCIENCE – 2",
      url: "https://drive.google.com/file/d/1QooR22h9YYho3afnlJqqfeD6ye1itu6i/view?usp=drive_link",
    },
    {
      name: "PROGRAMMING IN C",
      url: "https://drive.google.com/file/d/1ZlT6mPO-dBARzxcbGEZqB2gEf0ArCIHL/view?usp=drive_link",
    },
    {
      name: "ENGINEERING ETHICS AND SUSTAINABLE DEVELOPMENT",
      url: "https://drive.google.com/file/d/1NuD36c7IQH8Zymjxn6sVhMFeo1oIKf4q/view?usp=drive_link",
    },
    {
      name: "DISCRETE MATHEMATICS (CORE)",
      url: "https://drive.google.com/file/d/1VDhUscTtkwbtXEDOwhi5e6vxvrRd_N2D/view?usp=drive_link",
    },
  ],
  it: [
    {
      name: "FULL IT SYLLABUS",
      url: "https://drive.google.com/file/d/1tHjoCS1oT_Mbcf3IhST2uEgyA4L3yh9Y/view?usp=drive_link",
    },
    {
      name: "MATHEMATICS FOR INFORMATION SCIENCE – 1",
      url: "https://drive.google.com/file/d/1ew5kXTKrMdFVDTXITnl5cfT8qGKiA1o4/view?usp=drive_link",
    },
    {
      name: "PHYSICS FOR INFORMATION SCIENCE",
      url: "https://drive.google.com/file/d/1-K9qqUGEXGrIs5_fryTLl77vX3w8xlt4/view?usp=drive_link",
    },
    {
      name: "CHEMISTRY FOR INFORMATION SCIENCE & ELECTRICAL SCIENCE",
      url: "https://drive.google.com/file/d/1RHSx6Gpzr2P4_AVNOJa7dsXfrKbAymRC/view?usp=drive_link",
    },
    {
      name: "ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING",
      url: "https://drive.google.com/file/d/1q3pakyjYLFuyWS0TK2n5HLWtypme5Jwp/view?usp=drive_link",
    },
    {
      name: "ENGINEERING MECHANICS",
      url: "https://drive.google.com/file/d/1ciES6cPEfJkh9W_V-5Qi2-5jbDXcx-fS/view?usp=drive_link",
    },
    {
      name: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING",
      url: "https://drive.google.com/file/d/1oil8nvFVVosYp4YeRRZ1KZNYXR4EBekl/view?usp=drive_link",
    },
    {
      name: "INTRODUCTION TO MECHANICAL ENGINEERING & CIVIL ENGINEERING",
      url: "https://drive.google.com/file/d/1l2cvJSLGq0AVRN5bwatzeDswpSvurqp6/view?usp=drive_link",
    },
    {
      name: "ALGORITHMIC THINKING WITH PYTHON",
      url: "https://drive.google.com/file/d/1ugnjRslVCgcJin-3mBodIxGAA4sRNIpx/view?usp=drive_link",
    },
    {
      name: "FOUNDATIONS OF COMPUTING: FROM HARDWARE ESSENTIALS TO WEB DESIGN",
      url: "https://drive.google.com/file/d/1N_pry7XEGHJPoyPmtVdKCVgYZ4EG2aHh/view?usp=drive_link",
    },
    {
      name: "MATHEMATICS FOR INFORMATION SCIENCE – 2",
      url: "https://drive.google.com/file/d/1CSExt42CXCwI82yYOM4UlBXkr-bkgXiM/view?usp=drive_link",
    },
    {
      name: "PROGRAMMING IN C",
      url: "https://drive.google.com/file/d/1o5w0oKfUG5npmk3koQgf3TnOM1hSrkCa/view?usp=drive_link",
    },
    {
      name: "ENGINEERING ETHICS AND SUSTAINABLE DEVELOPMENT",
      url: "https://drive.google.com/file/d/1WPirx_YdwUbna60vYZHNxDzFSB31S2Nj/view?usp=drive_link",
    },
    {
      name: "DISCRETE MATHEMATICAL STRUCTURES (CORE)",
      url: "https://drive.google.com/file/d/1nNHDfy_FKiyH1eQZ6uSXqOHc0CFh7pej/view?usp=drive_link",
    },
  ],
};

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

const isSemester12 =
  (semester === "1-2" || semester === "1%2D2") &&
  scheme === "2025" &&
  (dept === "ece" || dept === "cse" || dept === "it");

const departmentSubjects =
  dept === "ece"
    ? subjects.ece
    : dept === "cse"
      ? subjects.cse
      : dept === "it"
        ? subjects.it
        : [];

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

        {!isSemester12 ? (
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
            {departmentSubjects.map((subject) => (
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
