import React from "react";
import PageContainer from "../_components/pageContainer";
import Link from "next/link";

function Introduction() {
  return (
    <PageContainer>
      <p className="text-lg">
        &emsp;&emsp;In the field of AI ethics, the question “What are the
        societal costs and benefits of automation?” is one of grandiose
        importance. The answer to this question is paramount to consider, as AI
        starts to displace many workers and upend many industries.
        Ill-considered policy, when combined with automation, can lead to social
        strife, as has been the case in the past. It is therefore of critical
        importance to design policy so that such things can be avoided. It is my
        belief that the way to avoid this is legislation protecting
        workers&apos; right to unionize and to strike.
      </p>
      <Link className="mt-8" href="/luddites">
        <button className="btn btn-secondary">Next Chapter</button>
      </Link>
    </PageContainer>
  );
}

export default Introduction;
