import { TextField } from "@mui/material";

export default function NumField({ chapter, value, setValue }) {
    const handleChange = (e) => {
        var inVal = e.target.value;

        const regex = /^[0-9\b]+$/;
        if (inVal == "" || regex.test(inVal)) {
            if (inVal.length == 2 && inVal.startsWith("0")) {
                inVal = inVal.substring(1);
            } else if (inVal.length == 0) {
                inVal = "0";
            }

            setValue(inVal);
        }
    };

    return (
        <TextField
            type="text"
            required
            id={`chapter-${chapter}`}
            label={`Chapter ${chapter}`}
            onChange={(e) => handleChange(e)}
            value={value}
            inputProps={{ maxLength: 2, inputMode: "numeric" }}
        />
    );
}
