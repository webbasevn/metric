import axios from 'axios';
import Cookies from 'cookies';

export default async function loginApi(req, res) {
    if (req.method !== 'GET') {
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

    const token = cookies.get('token')

    if(!token) return res.status(403).json({
        actionCode: 'redirect',
        message: 'Hết phiên làm việc',
        data:[]
    })

    try {
        let config = {
            method: 'GET',
            url: `https://datalake.pinggo.vn/api/profile`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        };

        const request = await axios(config);

        return res.status(200).json(request.data.data);

    } catch (err) {
        console.log(err)
        return res.status(403).json({
            message: 'Sai thông tin đăng nhập, vui lòng thử lại'
        })
    }
}