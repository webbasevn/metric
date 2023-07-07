import axios from 'axios';
import Cookies from 'cookies';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(404).json({
            status: 'error',
            statusCode: '01',
            msg: 'Request not found',
        });
    }

    const cookies = new Cookies(req, res, {
        secure: process.env.NODE_ENV !== 'development',
    });

    const token = cookies.get('token');

    try {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://datalake.pinggo.vn/api/logout`,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        };

        await axios(config);

        cookies.set('token');

        return res.status(200).json({
            status: 'success',
            statusCode: '200',
            msg: 'logout success',
        });
    } catch (e) {
        console.log(e)
        return res.status(403).json(e?.response?.data?.message || 'Lỗi không xác định');
    }
}
