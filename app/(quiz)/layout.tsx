import Head from "next/head";

export default function QuestionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Head>
        <title>SKETCHARE</title>
      </Head>
      <div>{children}</div>
    </div>
  );
}
