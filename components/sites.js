import { Fragment } from "react";
import Title from "../atoms/title";
import SiteCard from "../atoms/site-card";

const Sites = ({ items }) => (
  <div className="wrapper">
    <section className="container">
      {items.map((category, index) => (
        <div key={index} className="category">
          <Title text={category.category_name} variant="primary" />
          <div className="cards">
            {category.sites.map((site, idx) => (
              <SiteCard
                key={idx}
                title={site.title}
                description={site.description}
                site_url={site.site_url}
              />
            ))}
          </div>
        </div>
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

      .category {
        margin-top: 40px;
      }

      .cards {
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </div>
);

export default Sites;
