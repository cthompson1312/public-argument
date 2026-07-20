import React from "react";
import PageContainer from "../_components/pageContainer";

function Luddites() {
  return (
    <PageContainer>
      <p className="text-lg">
        &emsp;&emsp;Starting in 1811 and continuing until 1813, the Luddite
        riots were a series of riots that happened in Britian{" "}
        <a className="link" href="/workscited#klein">
          (Klein)
        </a>
        . Taking their name from the folk hero “General Ludd”, the Luddites went
        around England smashing textile machines{" "}
        <a className="link" href="/workscited#klein">
          (Klein)
        </a>
        . These workers had no ability to form a union or strike, and so they
        resorted to destroying the machines that had replaced them. Eventually
        the British government mobilized 14,000 troops against the Luddites and
        made breaking machines a capital offense{" "}
        <a className="link" href="/workscited#klein">
          (Klein)
        </a>
        . This led to 24 Luddites being executed. This situation could have been
        easily avoided if the workers were able to negotiate by forming unions
        and being allowed to strike.
      </p>
    </PageContainer>
  );
}

export default Luddites;
