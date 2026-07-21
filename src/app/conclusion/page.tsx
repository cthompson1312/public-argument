import React from "react";
import PageContainer from "../_components/pageContainer";
import Link from "next/link";

function Conclusion() {
  return (
    <PageContainer>
      <p className="text-lg">
        &emsp;&emsp;The prospect of job automation is inherently a tempting one.
        It leads to a utopian vision where no one must work, and all necessary
        human labor is performed by machines instead, leaving people free to
        pursue their interests. This is an inherently flawed vision, however.
        The arc of automation naturally favors capital holders, and without
        intervention, will lead to increasing amounts of wealth concentration.
        This, in my view, must be combated with pro-union, pro-strike
        legislation if this wealth concentration is to be avoided.
      </p>
      <Link className="mt-8" href="/workscited">
        <button className="btn btn-secondary">Next Chapter</button>
      </Link>
    </PageContainer>
  );
}

export default Conclusion;
