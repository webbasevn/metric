import HeaderTable from '@/components/datatable/header';
import FormatCurrency from '@/components/format/money';
import LoadingSection from '@/components/loading/section';
import { useMetric } from '@/hooks/useMetric';
import { DataGrid, viVN } from '@mui/x-data-grid';
import { makh } from '@/components/data/makh';
import { Typography } from '@mui/material';

function get_ma_metric(name){
    let result = ""
    makh.map(item =>{
        if(item.name === name) result = item.ma
    })

    return result
}

const columns = [
  { 
    field: 'ma_metric', 
    headerName: 'Mã KH Metric', 
    width: 150,
    renderCell:(params) => <Typography variant='body2'>{get_ma_metric(params.row.ten)}</Typography>
  },
  { 
    field: 'ten', 
    headerName: 'Tên shop', 
    width: 350 
  },
  { 
    field: 'dia_chi', 
    headerName: 'Địa chỉ', 
    width: 250 
  },
  { 
    field: 'sdt', 
    headerName: 'Số điện thoại', 
    width: 200 
  },
  { 
    field: 'tong_phieu', 
    headerName: 'Số đơn hàng', 
    width: 120 
  },
  { 
    field: 'thanh_tien', 
    headerName: 'Doanh thu', 
    width: 200,
    renderCell:(params) => <FormatCurrency data={params.value}/>
  },
  { 
    field: 'tong_sl_x_dg', 
    headerName: 'Doanh thu thuần', 
    width: 200,
    renderCell:(params) => <FormatCurrency data={params.value}/>
  },
];
export default function DataTable(){

    const {metric,first_loading} = useMetric()

    if(first_loading) return <LoadingSection />

    return(
        <>
            <HeaderTable metric={metric}/>
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={metric}
                    columns={columns}
                    getRowId={(row) => row.ma}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    autoHeight={true}
                    pageSizeOptions={[10,20,30]}
                    disableRowSelectionOnClick
                    sx={{ 
                        border: 0,
                        fontSize: 13,
                        '& .MuiDataGrid-columnHeaderTitle':{
                            fontWeight: 500,
                            color: '#222',
                        }
                    }}
        
                    localeText={viVN.components.MuiDataGrid.defaultProps.localeText}
                />
            </div>
        </>
    )
}