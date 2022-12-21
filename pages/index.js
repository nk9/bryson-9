import styles from "/styles/Home.module.css";
import { Typography, Button } from "@mui/material";
import LinkButton from "/components/LinkButton";
import clsx from "clsx";

export default function Home() {
    return (
        <div className={clsx(styles.landing_page, styles.container)}>
            <Typography variant="h2" mb={4}>
                Bryson<sup>9</sup>
            </Typography>
            <LinkButton href="/page2">Are you ready?</LinkButton>
        </div>
    );
}
