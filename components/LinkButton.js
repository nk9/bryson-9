import { Button } from "@mui/material";
import { NextLinkComposed } from "/components/Link";

export default function LinkButton({ href, children }) {
    return (
        <Button
            variant="contained"
            component={NextLinkComposed}
            to={{ pathname: href }}
        >
            {children}
        </Button>
    );
}
