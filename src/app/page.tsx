import Layout from "@/components/Layout";
import React from "react";

export default function Home({ children }: React.PropsWithChildren) {
  return <Layout>{children}</Layout>;
}
