import React from "react";
import PageContainer from "../_components/pageContainer";

function Composition() {
  return (
    <PageContainer>
      <p className="text-lg">
        &emsp;&emsp;As we have seen, there are various historical examples of
        societal unrest caused by the automation of peoples&apos; jobs. This,
        however, may be due to an eduction, or lack thereof. There is no
        demonstrated link between automation and loss of jobs, as the argument
        goes. If the people were more educated they would learn this, there
        would be less needless blaming of automation and less social strife.
      </p>
      <p className="text-lg">
        &emsp;&emsp;This analysis is contradicted by Autor, et al. In their
        paper “The Skill Content of Recent Technological Change: An Empirical
        Exploration”, they lay out what they found. They used a computer to
        model changes in task content across various jobs and industries, when
        they were exposed to automation brought about by the computer. What they
        found is that their model predicts a 4.3% decline in the number of
        “routine manual tasks” that were being performed. When compared to the
        actual data, their model predicts 60% of the change in the labor force.
        This means that there is a demonstrable link between the introduction of
        automation and the change in the task content of jobs, which very often
        leads to people being laid off.
      </p>
    </PageContainer>
  );
}

export default Composition;
