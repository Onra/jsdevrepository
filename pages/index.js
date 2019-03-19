import { Fragment } from "react";
import Layout from "../components/layout";
import Landing from "../components/landing";
import sites from "../resources/sites";
import Title from "../atoms/title";
import SiteCard from "../atoms/site-card";

const Index = () => (
  <Layout>
    <Landing />
    {sites.map((category, index) => (
      <Fragment key={index}>
        <Title text={category.category_name} />
        {category.sites.map((site, key) => (
          <SiteCard key={index} title={site.title} />
        ))}
      </Fragment>
    ))}
  </Layout>
);

export default Index;
