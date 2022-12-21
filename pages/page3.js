import styles from "/styles/Home.module.css";
import { Typography } from "@mui/material";
import LinkButton from "/components/LinkButton";

import NavBar from "/components/NavBar";

export default function Page3() {
  return (
    <>
      <NavBar />

      <Typography variant="h5" className={styles.headline}>
        One by one by one
      </Typography>
      <div className={styles.container}>
        <Typography variant="body1" align="left" mb={2} sx={{ width: "100%" }}>
          Open the envelope and solve all ten chapters. Be careful: some
          chapters have more than one page!
        </Typography>
        <Typography variant="body1" align="left" mb={6} sx={{ width: "100%" }}>
          When you have solved a set of chapters, enter them here to check your
          work.
        </Typography>
        <LinkButton href="/check">Check, Mate!</LinkButton>
      </div>
    </>
  );
}
