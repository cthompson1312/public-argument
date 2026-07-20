import React from "react";
import PageContainer from "../_components/pageContainer";
import Link from "next/link";

function WorksCited() {
  const contents = [
    {
      author: "Klein, Christopher.",
      title:
        '"The Original Luddites Raged against the Machine of the Industrial Revolution | HISTORY."',
      journal: "HISTORY",
      date: "4 Jan. 2019",
      link: "https://www.history.com/articles/industrial-revolution-luddites-workers",
      anchor: "klein",
    },
    {
      author: "Voth, Hans-Joachim, and Caprettini, Bruno",
      title:
        '"Rage against the Machines: New Technology and Violent Unrest in Industrialising Britain."',
      journal: "CEPR",
      date: "9 May 2017",
      link: "https://cepr.org/voxeu/columns/rage-against-machines-new-technology-and-violent-unrest-industrialising-britain",
      anchor: "swing",
    },
    {
      author: "Marx, Karl.",
      title: "Capital.",
      journal: "London, Penguin Books",
      date: "1985",
      link: "https://www.marxists.org/archive/marx/works/download/pdf/Capital-Volume-I.pdf",
      anchor: "capital",
    },
    {
      author: "Autor, D.H., et al.",
      title:
        '"The Skill Content of Recent Technological Change: An Empirical Exploration."',
      journal:
        "The Quarterly Journal of Economics, vol. 118, no. 4, pp. 1279-1333.",
      date: "1 Nov. 2003",
      link: "https://economics.mit.edu/sites/default/files/publications/the%20skill%20content%202003.pdf",
      anchor: "autor",
    },
    {
      author: "Murray, Seb.",
      title:
        '"A New Look at How Automation Changes the Value of Labor | MIT Sloan."',
      journal: "MIT Sloan",
      date: "18 Aug. 2025",
      link: "https://mitsloan.mit.edu/ideas-made-to-matter/a-new-look-how-automation-changes-value-labor",
      anchor: "murray",
    },
  ];

  return (
    <PageContainer>
      <ul className="list">
        <li className="p-4 pb-2 text-xs tracking-wide opacity-60">
          Works Cited
        </li>
        {contents.map((article, i) => (
          <Link key={i} href={article.link}>
            <li id={article.anchor} className="list-row">
              <div className="">
                <div className="text-2xl">
                  {article.author} {article.title} <i>{article.journal}</i>,{" "}
                  {article.date}.
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </PageContainer>
  );
}

export default WorksCited;
