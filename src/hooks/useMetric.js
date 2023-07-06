import useSWR, { mutate } from 'swr';
import dayjs from "dayjs";
import axiosClient from '@/api-client/axiosClient';

const startDay = dayjs(dayjs().startOf("month")).format('DD/MM/YYYY')
const endDay = dayjs(dayjs().endOf("month")).format('DD/MM/YYYY')

const fetcher = url => axiosClient.post(url,{
    startDate: startDay,
    endDate: endDay
}).then(res => res.result)

export function useMetric() {

    const {data:metric, isLoading,error, mutate} = useSWR(`/metric`, fetcher, {
        dedupingInterval: 1000 * 60 * 60 * 24,
        revalidateOnFocus: false,
        shouldRetryOnError: false,
        revalidateIfStale: false,
    });

    const first_loading = metric === undefined && error === undefined


    async function filterMetric(startDay,endDay){

        const req = await axiosClient.post(`/metric`, {
            startDate: startDay,
            endDate: endDay
        })

        mutate(req.result,false)

    }

    return {
        metric,
        first_loading,
        filterMetric
    };
}
