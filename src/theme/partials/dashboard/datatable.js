import HeaderTable from '@/components/datatable/header';
import FormatCurrency from '@/components/format/money';
import LoadingSection from '@/components/loading/section';
import { useMetric } from '@/hooks/useMetric';
import { DataGrid, viVN, GridToolbarColumnsButton, GridToolbarExport  } from '@mui/x-data-grid';
import { makh } from '@/components/data/makh';
import { Stack, Typography } from '@mui/material';

function check(ten,item){
  let result = item

  makh.map(item => {

    if(item.name === ten){
      result.ma_metric = item.ma
      return
    }

    result.ma_metric = 'unknow'

  })

  return result
}

function get_ma_metric(metric){

  let result = []

  metric.map(item => {
    result.push(check(item.ten,item))
  })

  return result
    
}

function CustomToolbar() {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h2" fontSize={18} color="#1E96D2" my={3} fontWeight={700}>
              Chi tiết doanh số từng shop
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
            <GridToolbarColumnsButton />
            <GridToolbarExport 
              csvOptions={{
                fileName: 'khach-hang-metric',
                utf8WithBom: true,
              }}
            />
          </Stack>
      </Stack>
    </>
  );
}

const columns = [
  { 
    field: 'ma_metric', 
    headerName: 'Mã KH Metric', 
    width: 150,
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
    field: 'doanh_thu_thuan', 
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
                    rows={get_ma_metric(metric)}
                    columns={columns}
                    getRowId={(row) => row.ma}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    slots={{ toolbar: CustomToolbar }}
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