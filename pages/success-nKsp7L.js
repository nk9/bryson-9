import { useState, useEffect } from "react";

import { Typography, Fade } from "@mui/material";
import NavBar from "/components/NavBar";

import styles from "/styles/Home.module.css";

export default function Success() {
    const [goal, setGoal] = useState("GOAL!");
    const [oCount, setOCount] = useState(1);
    const [showCodes, setShowCodes] = useState(false);
    const maxOCount = 33;

    useEffect(() => {
        const goalRepeat = setInterval(() => {
            setOCount((prevCount) => {
                console.log(prevCount);
                if (prevCount >= maxOCount) {
                    clearInterval(goalRepeat);
                    setShowCodes(true);
                }
                return (prevCount += 1);
            });
        }, 50);
        return () => {
            clearInterval(goalRepeat);
        };
    }, []);

    useEffect(() => {
        let goalStr = "G" + "O".repeat(oCount);
        if (oCount >= maxOCount) {
            goalStr += "AL!";
        }

        setGoal(goalStr);
    }, [oCount]);

    return (
        <>
            <NavBar />
            <Typography
                variant="h2"
                className={styles.headline}
                sx={{ overflowWrap: "break-word", hyphens: "auto" }}
            >
                {goal}
            </Typography>

            <Fade in={showCodes} timeout={2000}>
                <Typography
                    variant="h2"
                    sx={{
                        color: "lightgray",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    748
                </Typography>
            </Fade>
            <Fade in={showCodes} timeout={2000}>
                <Typography
                    variant="h2"
                    sx={{
                        color: "purple",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    581
                </Typography>
            </Fade>
        </>
    );
}
