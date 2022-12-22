import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Typography, Button, Input, Box, TextField } from "@mui/material";

import styles from "/styles/Home.module.css";

import LinkButton from "/components/LinkButton";
import NumField from "/components/NumField";
import NavBar from "/components/NavBar";
import useTimeoutState from "/components/hooks/useTimeoutState";

export default function Check2() {
  const [ch4, setCh4] = useState(0);
  const [ch5, setCh5] = useState(0);
  const [ch6, setCh6] = useState(0);

  const [nextDisabled, setNextDisabled] = useState(true);
  const [nextSecret, setNextSecret] = useState("");

  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useTimeoutState(false);

  useEffect(() => {
    if (ch4 != "0" && ch5 != "0" && ch6 != "0") {
      fetch(`/api/check_numbers?set=2&values=${ch4},${ch5},${ch6}`)
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
    }
  }, [ch4, ch5, ch6]);

  return (
    <>
      <NavBar />
      <Typography variant="h5" className={styles.headline}>
        Checkin’ It Thrice
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
          <NumField chapter={4} value={ch4} setValue={setCh4} />
          <NumField chapter={5} value={ch5} setValue={setCh5} />
          <NumField chapter={6} value={ch6} setValue={setCh6} />
        </Box>
        <LinkButton href={`/check3-${nextSecret}`} disabled={nextDisabled}>
          You’ve got this!
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
