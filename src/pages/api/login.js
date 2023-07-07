import axios from 'axios';
import Cookies from 'cookies';

export default async function loginApi(req, res) {
    if (req.method !== 'POST') {
        return res.status(404).json({
            success: false,
            errorCode: 'REQUEST_NOT_FOUND',
            data: {
                msg: 'Request not found',
            },
        });
    }

    const cookies = new Cookies(req, res, {
        secure: process.env.NODE_ENV !== 'development',
    });

    try {
        let config = {
            method: 'post',
            url: `https://datalake.pinggo.vn/api/login`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(req.body),
        };

        const request = await axios(config);

        const expires = new Date();
        expires.setDate(expires.getDate() + 365);

        cookies.set('token', request.data.data.token, {
            httpOnly: true,
            sameSite: 'lax',
            expires: expires,
            maxAge: 86400000 * 365,
        });

        return res.status(200).json(request.data.data);

    } catch (err) {
        console.log(err)
        return res.status(403).json({
            message: 'Sai thông tin đăng nhập, vui lòng thử lại'
        })
    }
}
