import { useState } from "react";

import styles from "/styles/Home.module.css";
import { Typography, Button, Input, Box, TextField } from "@mui/material";
import Link from "next/link";
import LinkButton from "/components/LinkButton";
import NumField from "/components/NumField";

import NavBar from "/components/NavBar";

export default function Check1() {
  const [ch1, setCh1] = useState(0);
  const [ch2, setCh2] = useState(0);
  const [ch3, setCh3] = useState(0);

  const check = (e) => {
    const fields = document.querySelectorAll(`input[id^="chapter\-"]`);
    console.log(fields);
  };

  return (
    <>
      <NavBar />
      <Typography variant="h5" className={styles.headline}>
        Checkin’ It Twice
      </Typography>
      <div className={styles.container}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <NumField chapter={1} value={ch1} setValue={setCh1} />
            <NumField chapter={2} value={ch2} setValue={setCh2} />
            <NumField chapter={3} value={ch3} setValue={setCh3} />
          </div>
        </Box>
        <Button mt={4} onClick={check}>
          Next
        </Button>
      </div>
    </>
  );
}
