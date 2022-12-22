import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Typography, Button, Input, Box, TextField } from "@mui/material";

import styles from "/styles/Home.module.css";

import LinkButton from "/components/LinkButton";
import NumField from "/components/NumField";
import NavBar from "/components/NavBar";
import useTimeoutState from "/components/hooks/useTimeoutState";

export default function Check3() {
  const [ch7, setCh7] = useState(0);
  const [ch8, setCh8] = useState(0);
  const [ch9, setCh9] = useState(0);
  const [ch10, setCh10] = useState(0);

  const [nextDisabled, setNextDisabled] = useState(true);
  const [nextSecret, setNextSecret] = useState("");

  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useTimeoutState(false);

  useEffect(() => {
    if (ch7 != "0" && ch8 != "0" && ch9 != "0" && ch10 != "0") {
      fetch(`/api/check_numbers?set=3&values=${ch7},${ch8},${ch9},${ch10}`)
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
  }, [ch7, ch8, ch9, ch10]);

  return (
    <>
      <NavBar />
      <Typography variant="h5" className={styles.headline}>
        Checkin’ It… Tetrice?
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
          <NumField chapter={7} value={ch7} setValue={setCh7} />
          <NumField chapter={8} value={ch8} setValue={setCh8} />
          <NumField chapter={9} value={ch9} setValue={setCh9} />
          <NumField chapter={10} value={ch10} setValue={setCh10} />
        </Box>
        <LinkButton href={`/success-${nextSecret}`} disabled={nextDisabled}>
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
