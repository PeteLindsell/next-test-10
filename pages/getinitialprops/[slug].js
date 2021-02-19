import { useRouter } from "next/router";
import { useEffect } from "react";

const Page = ({ userAgent, query }) => {
  const router = useRouter();
  console.log({ router });
  console.log({ query });

  useEffect(() => {
    console.log("useEffect isReady", router);
  }, [router.isReady]);

  useEffect(() => {
    console.log("useEffect query", router);
  }, [router.query]);

  return (
    <main>
      <h1>{query.slug}</h1>
      Your user agent: {userAgent}
    </main>
  );
};

Page.getInitialProps = async ({ req, query }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent, query };
};

export default Page;
