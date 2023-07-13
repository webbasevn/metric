import LoadingSection from "@/components/loading/section";
import { useMetric } from "@/hooks/useMetric";
import ChartMetric from "@/theme/partials/dashboard/chart";
import DataTable from "@/theme/partials/dashboard/datatable";
import { Typography } from "@mui/material";

const App = () => { 

  const {metric,first_loading} = useMetric()

  if(first_loading) return <LoadingSection />

  return (

    <>
      <Typography variant="h2" fontSize={18} color="#1E96D2" my={3} fontWeight={700}>
         Biểu đồ doanh số các shop
      </Typography>
      <ChartMetric />
      
      <DataTable />
    </>
  );
}; 

export default App;