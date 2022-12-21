import { Button } from "@mui/material";
import { NextLinkComposed } from "/components/Link";

export default function LinkButton({ href, disabled, children }) {
    return (
        <Button
            variant="contained"
            component={NextLinkComposed}
            disabled={disabled}
            to={{ pathname: href }}
        >
            {children}
        </Button>
    );
}
