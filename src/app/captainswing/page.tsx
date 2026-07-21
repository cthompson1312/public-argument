import React from "react";
import PageContainer from "../_components/pageContainer";
import Link from "next/link";
import Image from "next/image";

function CaptainSwing() {
  return (
    <PageContainer>
      <p className="text-lg">
        &emsp;&emsp;The Captain Swing Riots took place in Britian from 1830-1832
        and were motivated similarly to the Luddites{" "}
        <Link className="link" href="/workscited#swing">
          (Voth and Caprettini)
        </Link>
        . These workers had been replaced by threshing machines, which were used
        to thresh wheat. These were even bigger than the Luddite riots, with
        over 2,000 riots breaking out in the span of 2 years{" "}
        <Link className="link" href="/workscited#swing">
          (Voth and Caprettini)
        </Link>
        . While the incidents happened across England, places where
        advertisements for threshing machines had been posted were about 1.5x
        more likely to experience a riot than places that had no such
        advertisements{" "}
        <Link className="link" href="/workscited#swing">
          (Voth and Caprettini)
        </Link>
        . This, combined with the fact that the rioters very often smashed these
        threshing machines, points to these machines as being at least partly
        the cause of the riots. This is yet another situation that could have
        been avoided if the workers were allowed to unionize and to strike.{" "}
      </p>
      <div className="flex">
        <div className="m-4">
          <Link href="/workscited#swing" className="mt-4">
            <Image src="/vothfig1.jpg" alt="figure" width={640} height={640} />
          </Link>
          <p className="mt-1">
            Image from{" "}
            <Link className="link" href="/workscited#swing">
              (Voth and Caprettini)
            </Link>
          </p>
        </div>
        <div className="m-4">
          <Link href="/workscited#swing">
            <Image src="/vothfig2.jpg" alt="figure" width={640} height={640} />
          </Link>
          <p className="mt-1">
            Image from{" "}
            <Link className="link" href="/workscited#swing">
              (Voth and Caprettini)
            </Link>
          </p>
        </div>
      </div>
      <p className="text-lg">
        These images show the number of riots that took place vs the number of
        advertisements for threshing machines in that area.
      </p>
      <Link className="mt-8" href="/marx">
        <button className="btn btn-secondary">Next Chapter</button>
      </Link>
    </PageContainer>
  );
}

export default CaptainSwing;
