import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Typography, Button, Input, Box, TextField } from "@mui/material";

import styles from "/styles/Home.module.css";

import NumField from "/components/NumField";
import NavBar from "/components/NavBar";
import useTimeoutState from "/components/hooks/useTimeoutState";

export default function Check1() {
  const [ch1, setCh1] = useState(0);
  const [ch2, setCh2] = useState(0);
  const [ch3, setCh3] = useState(0);
  const [nextDisabled, setNextDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useTimeoutState(false);

  useEffect(() => {
    var isDisabled = true;

    if (ch1 != "0" && ch2 != "0" && ch3 != "0") {
      fetch(`/api/check_numbers?set=1&values=${ch1},${ch2},${ch3}`)
        .then((res) => {
          if (res.status == 200) {
            isDisabled = false;
          } else {
            isDisabled = true;
            return res.json();
          }
        })
        .then((data) => {
          if (data) {
            setMessage(data.message);
            setShowMessage(true, { timeout: 3000 });
          }
        });
    }

    setNextDisabled(isDisabled);
  }, [ch1, ch2, ch3]);

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
        <Button
          variant="contained"
          mt={4}
          onClick={check}
          disabled={nextDisabled}
        >
          Check
        </Button>
        {showMessage && <Typography variant="body1">{message}</Typography>}
      </div>
    </>
  );
}
