import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { globalConfig } from "@/theme/ultils/config";
import PickTime from "../pickTime";

export default function HeaderDefault(){

    return(
        <Box component="header">
            <Box height={20} className="bgPinggo" />
            <Container maxWidth={globalConfig.maxWidth}>
                <Stack direction={{xs: 'column', md: 'row'}} justifyContent="space-between" alignItems="center" py={2} spacing={3}>
                    <Stack direction="row" alignItems="center" spacing={3} divider={<Divider orientation="vertical" flexItem />}>
                        <Image
                            src="/logo/logo.svg"
                            width={120}
                            height={20}
                            alt="PingGO Logo"
                        />

                        <Typography variant="body1" fontWeight={600} textTransform="uppercase" color="primary.main">
                            API đối tác Metric
                        </Typography>
                    </Stack>
                    <PickTime />
                </Stack>
            </Container>
            <Divider light />
        </Box>
    )
}