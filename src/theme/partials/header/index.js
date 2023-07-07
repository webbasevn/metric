import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { globalConfig } from "@/theme/ultils/config";
import PickTime from "../pickTime";
import Grid from '@mui/material/Unstable_Grid2'; 
import AccountHeader from "./account";

export default function HeaderDefault(){

    return(
        <Box component="header">
            <Box height={20} className="bgPinggo" />
            <Container maxWidth={globalConfig.maxWidth}>
                <Grid container spacing={2} sx={{py: 2, alignItems: 'center'}}>
                    <Grid xs={6} md={4} order={{xs: 1, md: 1}}>
                        <Stack direction="row" alignItems="center" spacing={3} divider={<Divider orientation="vertical" flexItem />} py={2}>
                            <Image
                                src="/logo/logo.svg"
                                width={120}
                                height={20}
                                alt="PingGO Logo"
                            />
                            <Typography variant="body1" fontWeight={600} textTransform="uppercase" color="primary.main" display={{xs: 'none', md: 'block'}}>
                                API đối tác Metric
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid xs={12} md={4} order={{xs: 3, md: 2}}>
                        <PickTime />
                    </Grid>
                    <Grid xs={6} md={4} order={{xs: 2, md: 3}} sx={{alignItems: 'flex-end', textAlign: 'right'}}>
                        <AccountHeader />
                    </Grid>
                </Grid>
            </Container>
            <Divider light />
        </Box>
    )
}