import ChartMetric from "@/theme/partials/dashboard/chart";
import DataTable from "@/theme/partials/dashboard/datatable";
import { Typography } from "@mui/material";

const App = () => { 

  return (

    <>
      <Typography variant="h2" fontSize={18} color="#1E96D2" my={3} fontWeight={700}>
         Biểu đồ doanh số các shop
      </Typography>
      <ChartMetric />
      <Typography variant="h2" fontSize={18} color="#1E96D2" my={3} fontWeight={700}>
          Chi tiết doanh số
      </Typography>
      <DataTable />
    </>
  );
}; 

export default App;