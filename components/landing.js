const Landing = () => (
  <div className="wrapper">
    <section className="content">
      <h1>JS Dev Directory</h1>
      <h2>
        The JS Dev Directory is a comprehensive list of blogs & sites covering
        JavaScript development.
      </h2>
    </section>
    <style jsx>{`
      .wrapper {
        background-color: #415ae1;
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .content {
        width: 740px;
        color: #ffffff;
        text-align: center;
      }

      h1 {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 40px;
      }

      h2 {
        font-size: 1.6rem;
        line-height: 44px;
      }
    `}</style>
  </div>
);

export default Landing;
