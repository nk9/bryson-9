import styles from "/styles/Home.module.css";
import { Typography, AppBar } from "@mui/material";
import LinkButton from "/components/LinkButton";

import NavBar from "/components/NavBar";

export default function Page2() {
  return (
    <>
      <NavBar />

      <Typography variant="h4" className={styles.headline}>
        Happy Birthday!
      </Typography>
      <div className={styles.container}>
        <Typography variant="body1" align="left" mb={2} sx={{ width: "100%" }}>
          One more trip around the sun.
          <br />
          One more day for all the fun.
          <br />
          One more year in the rear-view.
          <br />
          One more puzzle to work through.
        </Typography>
        <Typography
          variant="body1"
          align="left"
          fontStyle="italic"
          sx={{ width: "100%" }}
          mb={6}
        >
          Actually, it’s 10 puzzles this time.
        </Typography>
        <LinkButton href="/page3">How’s this work, then?</LinkButton>
      </div>
    </>
  );
}
