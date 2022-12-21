import styles from "/styles/Home.module.css";
import { Typography, Button } from "@mui/material";
import Link from "next/link";
import clsx from "clsx";

export default function Home() {
    return (
        <div className={clsx(styles.landing_page, styles.container)}>
            <Typography variant="h2" mb={4}>
                Bryson<sup>9</sup>
            </Typography>
            <Link href="/page2" passHref>
                <Button variant="contained">Are you ready?</Button>
            </Link>
        </div>
    );
}
