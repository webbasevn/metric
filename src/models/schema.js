import * as yup from 'yup'


const loginSchema = yup.object({
    email: yup
        .string()
        .email('Email không đúng, vui lòng kiểm tra lại')
        .required('Email không được bỏ trống'),
    password: yup
        .string()
        .min(6, 'Mật khẩu phải có tối thiểu 6 ký tự')
        .required('Mật khẩu không được bỏ trống'),
})


export {
    loginSchema
}