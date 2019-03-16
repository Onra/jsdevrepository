import Header from "./header";
import Head from "next/head";

const Layout = props => (
  <div>
    <Head>
      <title>JS Dev Directory</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
    </Head>
    <Header />
    {props.children}
    <style global jsx>
      {`
        body {
          font-family: "Roboto", sans-serif;
        }
      `}
    </style>
  </div>
);

export default Layout;
