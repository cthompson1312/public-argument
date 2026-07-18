import React, { type ReactNode } from "react";
import PageContainer from "./pageContainer";

function ArticleContainer({
  children,
  number,
}: {
  children: ReactNode;
  number: number;
}) {
  return <PageContainer>{children}</PageContainer>;
}

export default ArticleContainer;
