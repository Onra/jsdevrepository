const Footer = () => (
  <footer>
    <div className="container">
      <span>
        Created with 💙 by{" "}
        <a href="https://github.com/Onra" target="_blank">
          Arnaud Christ
        </a>
      </span>
    </div>
    <style jsx>{`
      footer {
        display: flex;
        justify-content: center;
        margin-top: 40px;
      }

      .container {
        width: 1200px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        color: #969bb2;
        font-size: 0.8rem;
      }

      a {
        text-decoration: none;
        color: #969bb2;
      }

      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </footer>
);

export default Footer;
