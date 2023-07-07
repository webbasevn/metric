import {  Stack } from "@mui/material";
import {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

import dayjs from "dayjs";
import { LoadingButton } from "@mui/lab";
import { useMetric } from "@/hooks/useMetric";

const startDay = dayjs(dayjs().startOf("month")).format('YYYY-MM-DD')
const endDay = dayjs(dayjs().endOf("month")).format('YYYY-MM-DD')

const startDayOfYear = dayjs(dayjs().startOf("year")).format('YYYY-MM-DD')

export default function PickTime(){

    const {filterMetric} = useMetric()

    const [value, setValue] = useState({ 
        startDate: startDay,
        endDate: endDay 
    }); 

    const handleValueChange = (newValue) => {
        setValue(newValue); 
    }

    const [loading,setLoading] = useState(false)

    const handleFilter = async () => {
        setLoading(true)
        try {

            await filterMetric(
                dayjs(value.startDate).format('DD/MM/YYYY'),
                dayjs(value.endDate).format('DD/MM/YYYY')
            )

        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    return(
        <Stack direction="row" spacing={2} alignItems="center" className="time-picker">
            <Datepicker 
                showShortcuts={true} 
                configs={{
                    shortcuts: {
                    today: "Today",
                    yesterday: "Yestoday", 
                    past: (period) => `${period} days ago`,
                    currentMonth: "This month",
                    customToday: { 
                        text: "This Year",
                        period: {
                        start: startDayOfYear,
                        end: new Date()
                        }, 
                    }, 
                    }
                }} 
                value={value} 
                onChange={handleValueChange} 
                primaryColor={"rose"} 
                displayFormat={"DD/MM/YYYY"}
                disabled={loading}
            /> 
            
            <LoadingButton variant="contained" onClick={handleFilter} loading={loading}>
                Filter
            </LoadingButton>
        </Stack>
    )
}