import Link from "next/link";
import Title from "../atoms/title";

const Header = () => (
  <header>
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
    <style jsx>
      {`
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #415ae1;
          color: #ffffff;
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

        .menu-item:hover {
          border-bottom: 2px #ffffff solid;
        }
      `}
    </style>
  </header>
);

export default Header;
