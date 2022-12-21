import styles from "/styles/Home.module.css";
import { Typography, Button } from "@mui/material";
import Link from "next/link";

import NavBar from "/components/NavBar";

export default function Check() {
  return (
    <>
      <NavBar />
      <Typography variant="h5" className={styles.headline}>
        Checkin’ it Twice
      </Typography>
      <div className={styles.container}>
        <Typography variant="body1" align="left" mb={2} sx={{ width: "100%" }}>
          Etc
        </Typography>
        <Typography variant="body1" align="left" mb={2} sx={{ width: "100%" }}>
          Etc
        </Typography>
        <Link href="/check" passHref>
          <Button variant="contained">Check, Mate!</Button>
        </Link>
      </div>
    </>
  );
}
