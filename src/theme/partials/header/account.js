import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useAuth } from "@/hooks/useAuth";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export default function AccountHeader(){

    const router = useRouter()

    const {userData,firstLoading,logout} = useAuth()

    const handleClick = async () => {
        const config = await Swal.fire({
            icon: 'warning',
            title: 'Đăng xuất',
            text: 'Bạn có chắc chắn muốn đăng xuất khỏi hệ thống',
            showCancelButton: true,
            confirmButtonColor: '#d30000',
            cancelButtonColor: '#888',
            confirmButtonText: 'Đăng xuất',
            cancelButtonText: 'Quay lại'
        })

        if(config.isConfirmed === false) return

        try {
            await logout()
            router.push('/login')
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Lỗi,..',
                text: 'Có lỗi, vui lòng thử lại sau'
            })
        }
    }

    if(firstLoading) return
    return(
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end" display={{xs: 'none', md: 'flex'}}>
            <Avatar
                sx={{ width: 26, height: 26, bgcolor: 'primary.main' }}
            >
                <PersonOutlineOutlinedIcon sx={{fontSize: 20}}/>
            </Avatar>

            <Typography variant="body2" fontWeight={500}>Hi ! {userData?.name || ""}</Typography>

            <Box sx={{cursor: 'pointer'}} onClick={handleClick}>
                <PowerSettingsNewIcon sx={{fontSize: 18, color: 'error.main'}}/>
            </Box>
        </Stack>

    )
}