import Link from "next/link";
import injectSheet from "react-jss";
import Title from "../atoms/title";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between"
  },

  items: {
    listStyle: "none",
    display: "flex"
  },

  item: {
    textTransform: "uppercase",
    minWidth: 160,
    textAlign: "center",
    cursor: "pointer"
  }
};

const Header = ({ classes }) => (
  <header className={classes.header}>
    <Title text="JS Dev Directory" />
    <nav>
      <ul className={classes.items}>
        <Link href="/">
          <li className={classes.item}>Home</li>
        </Link>
        <Link href="contributing">
          <li className={classes.item}>Contributing</li>
        </Link>
        <Link href="about">
          <li className={classes.item}>About</li>
        </Link>
      </ul>
    </nav>
  </header>
);

export default injectSheet(styles)(Header);
