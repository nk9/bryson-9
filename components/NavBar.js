import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function NavBar() {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: "space-around" }}>
        <Link href="/" passHref>
          <Typography variant="h6" component="div">
            Bryson<sup>9</sup>
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
