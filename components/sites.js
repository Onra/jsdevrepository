import { Fragment } from "react";
import Title from "../atoms/title";
import SiteCard from "../atoms/site-card";

const Sites = ({ items }) => (
  <div className="wrapper">
    <section className="container">
      {items.map((category, index) => (
        <Fragment key={index}>
          <Title text={category.category_name} variant="primary" />
          {category.sites.map((site, key) => (
            <SiteCard key={index} title={site.title} />
          ))}
        </Fragment>
      ))}
    </section>
    <style jsx>{`
      .wrapper {
        display: flex;
        justify-content: center;
      }

      .container {
        width: 1200px;
      }
    `}</style>
  </div>
);

export default Sites;
