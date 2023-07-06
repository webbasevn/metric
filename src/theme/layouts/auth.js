import { Box, Container, Paper, Stack } from "@mui/material";
import Image from "next/image";

export default function AuthLayout({children}){
    return(
        <Stack direction="column" height="100vh" justifyContent="center" alignItems="center" bgcolor="#f0f0f0">
            <Container maxWidth="md">
                <Stack direction="column" justifyContent="center" alignItems="center" spacing={3}>
                    <Box>
                        <Image
                        src="/logo/logo.svg"
                        width={140}
                        height={22}
                        alt="Pinggo Logo"
                        />
                    </Box>
                    <Paper elevation={0} sx={{p:3.5, minWidth: 400, borderRadius: 2}}>
                        {children}
                    </Paper>
                </Stack>
            </Container>
        </Stack>
    )
}