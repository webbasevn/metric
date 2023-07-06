import { CircularProgress, Stack } from "@mui/material";

export default function LoadingScreen(){
    return(
        <Stack direction="column" justifyContent="center" alignItems="center" width="100vw" height="100vh">
            <CircularProgress />
        </Stack>
    )
}