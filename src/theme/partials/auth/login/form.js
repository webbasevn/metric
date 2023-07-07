import { Alert, Button, IconButton, Stack, TextField, Typography } from "@mui/material";

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useAuth } from "@/hooks/useAuth";
import LoadingSection from "@/components/loading/section";
import { useFormik } from "formik";
import { loginSchema } from "@/models/schema";
import { useRouter } from "next/router";

export default function LoginForm(){

    const router = useRouter()

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const [error,setError] = useState({
        status: false,
        message: ''
    })

    const {userData,firstLoading,login} = useAuth()

    // console.log(userData)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: async (values) => {

            setLoading(true);

            setError({
                status: false,
                message: '',
            });

            try {
                await login(values);
                router.push('/');
            } catch (error) {
                setError({
                    status: true,
                    message: error?.response?.data?.message || 'Đăng nhập không thành công, vui lòng thử lại',
                });

            }

            setLoading(false);
        }
    })

    if(firstLoading) return <LoadingSection />

    return(
        <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2} mb={2}>
                {error.status && <Alert severity="error">{error.message}</Alert> }
                <Stack direction="column" spacing={1}>
                    <Typography variant="body2" fontWeight={500}>Địa chỉ email</Typography>
                    <TextField
                        hiddenLabel
                        placeholder="Nhập địa chỉ email của bạn"
                        size="small"
                        InputProps={{
                            startAdornment: <EmailOutlinedIcon sx={styles.iconStart}/>
                        }}
                        id="email"
                        name="email"
                        fullWidth
                        inputProps={{style: {fontSize: '14px'}}}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Stack>

                <Stack direction="column" spacing={1}>
                    <Typography variant="body2" fontWeight={500}>Mật khẩu</Typography>
                    <TextField
                        hiddenLabel
                        placeholder="Nhập mật khẩu"
                        size="small"
                        InputProps={{
                            startAdornment: <LockOutlinedIcon sx={styles.iconStart}/>,
                            endAdornment: <IconButton onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VisibilityOff sx={styles.icon}/> : <Visibility sx={styles.icon}/>}</IconButton>
                        }}
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        inputProps={{style: {fontSize: '14px'}}}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </Stack>

                <LoadingButton
                    loading={loading}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Đăng nhập
                </LoadingButton>

            </Stack>
        </form>
    )
}

const styles = {
    iconStart: {
        fontSize: 20,
        color: '#888',
        mr: 1
    },
    icon: {
        fontSize: 20,
        color: '#888',
    }
}