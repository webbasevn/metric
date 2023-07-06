import { CircularProgress, Stack } from "@mui/material";

export default function LoadingSection(){
    return(
        <Stack direction="column" justifyContent="center" alignItems="center" minHeight="30vh">
            <CircularProgress />
        </Stack>
    )
}