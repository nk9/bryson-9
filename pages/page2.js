import styles from "/styles/Home.module.css"
import {
  Typography,
  Button,
  AppBar
} from "@mui/material"
import Link from 'next/link'

import NavBar from '/components/NavBar'

export default function Page2() {
 return (
  <>
    <NavBar       />   
     
    <Typography variant="h4" className={styles.headline}>Happy Birthday!</Typography>
    <div className={styles.container}>
    <Typography variant="body1" align="left" mb={2} sx={{width: "100%"}}>
      One more journey around the sun.<br/>
      One more year in the rear-view.<br/>
      And one more puzzle to work through.
    </Typography>
    <Typography variant="body1" align="left" fontStyle="italic" sx={{width: "100%"}} mb={6}>
      Actually, it's 10 puzzles this time.<br/>
    </Typography>
     <Link href="/page3" passHref>
       <Button variant="contained">How's this work, then?</Button>
     </Link>
    </div>
  </>
 );
}
