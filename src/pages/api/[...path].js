import axios from "axios"

export default async function handler(req, res) {
    
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://api.mobiwork.vn:3016/DistributeReport/StatsSaleByCustomer?orgid=636f0a5313e82d5cefd33014&isOrder=2&projectID=&projectName=&assignTo=&eeName=&dvt=true&ma_nhan_hieu=&ten_nhan_hieu=&industryID=&industryName=&ctypeID=&ctypeName=&cgroupID=NKH001&cgroupName=&regionID=&regionName=&productID=&fromdate=${req.body.startDate}&todate=${req.body.endDate}`,
        headers: { 
            'Authorization': 'Basic YWRtaW5AcGluZ2dvLnZuOmVhMzg4NDRhY2U5YzcxNGFkYzNkN2MyZDhkM2Y3NGE2'
        }
    };
    
    try{
        const req = await axios(config)
        return res.status(200).json(req.data)
    }catch(e){
        return res.status(403).json("Có lỗi, vui lòng liên hệ hỗ trợ để xử lý")
    }

    
}
  