import { Box, Stack, Typography } from "@mui/material";
import FormatCurrency from "../format/money";

function get_total_order(metric){
    let result = 0
    metric.map(item => result += item.tong_phieu)
    return result
}

function get_total_money(metric){
    let result = 0
    metric.map(item => result += item.thanh_tien)
    return result
}

function get_total_revanua(metric){
    let result = 0
    metric.map(item => result += item.tong_sl_x_dg)
    return result
}


export default function HeaderTable({...props}){

    return(
        <Box mb={2}>
            <Stack direction={{xs: 'column', md: 'row'}} justifyContent="space-between" alignItems="center" bgcolor="secondary.main" color="#fff" spacing={1} fontWeight={600} fontSize={14} p={2}>
                <Stack direction="row" alignItems="center" spacing={3}>
                    <Typography variant="body2" color="#fff">
                        Tổng số đơn hàng
                    </Typography>
                    <Typography variant="body2" color="#fff" fontWeight={700}>
                        {get_total_order(props.metric)}
                    </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={3}>
                    <Typography variant="body2" color="#fff">
                        Doanh thu
                    </Typography>
                    <Typography variant="body2" color="#fff" fontWeight={700}>
                        <FormatCurrency data={get_total_money(props.metric)} />
                    </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={3}>
                    <Typography variant="body2" color="#fff">
                        Doanh thu thuần
                    </Typography>
                    <Typography variant="body2" color="#fff" fontWeight={700}>
                        <FormatCurrency data={get_total_revanua(props.metric)} />
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    )
}