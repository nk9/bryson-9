import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Typography, Button, Input, Box, TextField } from "@mui/material";

import styles from "/styles/Home.module.css";

import LinkButton from "/components/LinkButton";
import NumField from "/components/NumField";
import NavBar from "/components/NavBar";
import useTimeoutState from "/components/hooks/useTimeoutState";

export default function Check1() {
  const [ch1, setCh1] = useState(0);
  const [ch2, setCh2] = useState(0);
  const [ch3, setCh3] = useState(0);

  const [nextDisabled, setNextDisabled] = useState(true);
  const [nextSecret, setNextSecret] = useState("");

  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useTimeoutState(false);

  useEffect(() => {
    if (ch1 != "0" && ch2 != "0" && ch3 != "0") {
      fetch(`/api/check_numbers?set=1&values=${ch1},${ch2},${ch3}`)
        .then((res) => {
          var isDisabled = true;

          if (res.status == 200) {
            isDisabled = false;
          } else {
            isDisabled = true;
          }

          setNextDisabled(isDisabled);
          return res.json();
        })
        .then((data) => {
          if (data) {
            setMessage(data.message);
            setShowMessage(true, { timeout: 3000 });

            if (data.secret) {
              setNextSecret(data.secret);
            }
          }
        });
    } else {
      setNextDisabled(true);
      setShowMessage(false);
    }
  }, [ch1, ch2, ch3]);

  return (
    <>
      <NavBar />
      <Typography variant="h5" className={styles.headline}>
        Checkin’ It Twice
      </Typography>
      <div className={styles.container}>
        <Box
          component="form"
          mb={2}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <NumField chapter={1} value={ch1} setValue={setCh1} />
          <NumField chapter={2} value={ch2} setValue={setCh2} />
          <NumField chapter={3} value={ch3} setValue={setCh3} />
        </Box>
        <LinkButton href={`/check2-${nextSecret}`} disabled={nextDisabled}>
          Carry on!
        </LinkButton>
        {showMessage && (
          <Typography variant="body1" mt={1}>
            {message}
          </Typography>
        )}
      </div>
    </>
  );
}
