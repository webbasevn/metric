import AuthLayout from "@/theme/layouts/auth"
import LoginForm from "@/theme/partials/auth/login/form"
import { Typography } from "@mui/material"

export default function LoginPage(){
    return(
        <>
            <Typography variant="h1" component="h1" fontSize={24} fontWeight={700} color="primary.main" textAlign="center" mt={2} mb={3}>
                Đăng nhập
            </Typography>
            <LoginForm />
        </>
    )
}

LoginPage.Layout = AuthLayout