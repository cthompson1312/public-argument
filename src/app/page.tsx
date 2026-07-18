"use client";

import Link from "next/link";
import PageContainer from "./_components/pageContainer";

export default function Home() {
  const contents = [
    { title: "Introduction", link: "/introduction" },
    { title: "Historical Context - the Luddite Riots", link: "/luddites" },
    {
      title: "Historical Context - the Captain Swing Riots",
      link: "/captainswing",
    },
    { title: "Marx's Analysis", link: "/marx" },
    {
      title: "Automation Changes the Composition of the Workforce",
      link: "/composition",
    },
    //{ title: "Modern Counterarguments", link: "/counterarguments" },
    { title: "Conclusion", link: "/conclusion" },
    { title: "Works Cited", link: "/workscited" },
  ];

  return (
    <PageContainer>
      <ul className="list">
        <li className="p-4 pb-2 text-xs tracking-wide opacity-60">
          Table of Contents
        </li>
        {contents.map((page, i) => (
          <Link href={page.link} key={i}>
            <li className="list-row">
              <div className="text-4xl font-thin tabular-nums opacity-30">
                {i + 1}
              </div>
              <div className="list-col-grow">
                <div className="text-2xl">{page.title}</div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </PageContainer>
  );
}
