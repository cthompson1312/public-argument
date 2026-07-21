import React from "react";
import PageContainer from "../_components/pageContainer";
import Link from "next/link";
import Image from "next/image";

function Luddites() {
  return (
    <PageContainer>
      <p className="text-lg">
        &emsp;&emsp;Starting in 1811 and continuing until 1813, the Luddite
        riots were a series of riots that happened in Britian{" "}
        <Link className="link" href="/workscited#klein">
          (Klein)
        </Link>
        . Taking their name from the folk hero “General Ludd”, the Luddites went
        around England smashing textile machines{" "}
        <Link className="link" href="/workscited#klein">
          (Klein)
        </Link>
        . These workers had no ability to form a union or strike, and so they
        resorted to destroying the machines that had replaced them. Eventually
        the British government mobilized 14,000 troops against the Luddites and
        made breaking machines a capital offense{" "}
        <Link className="link" href="/workscited#klein">
          (Klein)
        </Link>
        . This led to 24 Luddites being executed. This situation could have been
        easily avoided if the workers were able to negotiate by forming unions
        and being allowed to strike.
      </p>
      <Link href="/workscited#brain" className="mt-4">
        <Image
          src="/luddites-lud.jpg"
          alt="General Ludd"
          width={640}
          height={640}
        />
      </Link>
      <p className="mt-1">
        An image depicting a larger-than-life General Ludd, showing the respect
        and reverence that the Luddites held for their mythical general. Image
        from{" "}
        <Link className="link" href="/workscited#brain">
          (Brain)
        </Link>
      </p>
      <Link className="mt-8" href="/captainswing">
        <button className="btn btn-secondary">Next Chapter</button>
      </Link>
    </PageContainer>
  );
}

export default Luddites;
