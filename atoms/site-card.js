const SiteCard = ({ title, description, site_url }) => (
  <div className="container" onClick={() => window.open(site_url, "_blank")}>
    <h1 className="title">{title}</h1>
    <p className="description">{description}</p>
    <style jsx>{`
      .container {
        background-color: #ffffff;
        padding: 20px 30px;
        border-radius: 4px;
        width: 30%;
        color: #3b4792;
        cursor: pointer;
        transition: all 0.2s;
        -webkit-box-shadow: 6px 6px 36px -12px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 6px 6px 36px -12px rgba(0, 0, 0, 0.75);
        box-shadow: 6px 6px 36px -12px rgba(0, 0, 0, 0.75);
      }

      .container:active {
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
      }

      .title {
        font-size: 22px;
      }

      .description {
        margin-top: 16px;
        line-height: 26px;
        font-size: 14px;
      }
    `}</style>
  </div>
);

export default SiteCard;
