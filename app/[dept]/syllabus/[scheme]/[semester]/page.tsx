"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function SemesterSyllabusPage() {
  const params = useParams();

  const dept = (params.dept as string).toLowerCase();
  const scheme = params.scheme as string;
  const semester = params.semester as string;

  /*
   * Only ECE 2025 Semester 1 & 2
   * is implemented with subjects for now.
   */
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

  /*
   * Only show the subject list for:
   *
   * ECE
   * 2025
   * Semester 1 & 2
   */
  const isECE2025Semester12 =
    dept === "ece" &&
    scheme === "2025" &&
    (semester === "1-2" || semester === "1%2D2");

  /*
   * For other departments/schemes/semesters,
   * don't show the subject list yet.
   */
  if (!isECE2025Semester12) {
    return (
      <div className="flex flex-col">
        <div className="flex-1 text-white flex flex-col justify-center items-center py-8">
          <div className="w-full max-w-6xl mb-6 bg-black/60 rounded-xl p-5 shadow-md border-gray-700 border mt-8 sm:mt-0">
            <div className="text-xl font-bold">
              SYLLABUS
            </div>

            <div className="text-sm text-gray-300 mt-1">
              {dept.toUpperCase()} — {scheme} Scheme — Semester{" "}
              {semester === "1-2" ? "1 & 2" : semester}
            </div>

            <div className="w-full border-t border-gray-700 mt-6 pt-3 text-center text-gray-400 text-sm">
              <nav aria-label="Breadcrumb">
                <ol className="list-reset flex flex-wrap justify-center">
                  <li>
                    <Link
                      href="/"
                      className="hover:underline text-gray-300"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <span className="mx-2">/</span>
                  </li>

                  <li>
                    <Link
                      href={`/${dept}/syllabus`}
                      className="hover:underline text-gray-300"
                    >
                      Syllabus
                    </Link>
                  </li>

                  <li>
                    <span className="mx-2">/</span>
                  </li>

                  <li>
                    <Link
                      href={`/${dept}/syllabus/${scheme}`}
                      className="hover:underline text-gray-300"
                    >
                      {scheme}
                    </Link>
                  </li>

                  <li>
                    <span className="mx-2">/</span>
                  </li>

                  <li className="text-gray-400">
                    Semester {semester === "1-2" ? "1 & 2" : semester}
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="text-gray-400 text-center">
            Subject-wise syllabus is not available for this selection yet.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 text-white flex flex-col justify-center items-center py-8">

        {/* Header */}
        <div className="w-full max-w-6xl mb-6 bg-black/60 rounded-xl p-5 shadow-md border-gray-700 border mt-8 sm:mt-0">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xl font-bold break-words">
                SYLLABUS
              </div>

              <div className="text-sm text-gray-300 mt-1">
                ECE — 2025 Scheme — Semester 1 & 2
              </div>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="w-full border-t border-gray-700 mt-6 pt-3 text-center text-gray-400 text-sm">
            <nav aria-label="Breadcrumb">
              <ol className="list-reset flex flex-wrap justify-center">

                <li>
                  <Link
                    href="/"
                    className="hover:underline text-gray-300"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <span className="mx-2">/</span>
                </li>

                <li>
                  <Link
                    href={`/${dept}/syllabus`}
                    className="hover:underline text-gray-300"
                  >
                    Syllabus
                  </Link>
                </li>

                <li>
                  <span className="mx-2">/</span>
                </li>

                <li>
                  <Link
                    href={`/${dept}/syllabus/${scheme}`}
                    className="hover:underline text-gray-300"
                  >
                    {scheme}
                  </Link>
                </li>

                <li>
                  <span className="mx-2">/</span>
                </li>

                <li className="text-gray-400">
                  Semester 1 & 2
                </li>

              </ol>
            </nav>
          </div>
        </div>

        {/* Subject Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-8 w-full max-w-6xl items-stretch">

          {subjects.map((subject) => (
            <button
              key={subject.name}
              onClick={() => window.open(subject.url, "_blank")}
              className="group relative flex flex-col items-center justify-center bg-black/60 border border-white/20 rounded-xl shadow-md px-4 py-3 sm:px-6 sm:py-4 transition-all duration-300 backdrop-blur-md cursor-pointer hover:scale-105 hover:shadow-2xl overflow-hidden h-full min-h-[72px]"
              style={{
                minWidth: "290px",
                maxWidth: "290px",
                margin: "0 auto",
              }}
            >
              <span className="z-10 text-white text-base sm:text-lg font-semibold text-center break-words">
                {subject.name}
              </span>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-white/10 to-black/10 pointer-events-none" />
            </button>
          ))}

        </div>
      </div>
    </div>
  );
}
