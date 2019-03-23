import Link from "next/link";
import Title from "../atoms/title";

const Header = () => (
  <header>
    <div className="container">
      <Title text="JS Dev Directory" />
      <nav>
        <ul className="menu-items">
          <Link href="/">
            <li className="menu-item">Home</li>
          </Link>
          <Link href="contributing">
            <li className="menu-item">Contributing</li>
          </Link>
          <Link href="about">
            <li className="menu-item">About</li>
          </Link>
        </ul>
      </nav>
    </div>
    <style jsx>
      {`
        header {
          color: #ffffff;
          display: flex;
          justify-content: center;
        }

        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
          width: 1400px;
          padding: 0 20px;
          position: absolute;
        }

        .menu-items {
          list-style: none;
          display: flex;
        }

        .menu-item {
          text-transform: uppercase;
          min-width: 160px;
          text-align: center;
          cursor: pointer;
        }
      `}
    </style>
  </header>
);

export default Header;
