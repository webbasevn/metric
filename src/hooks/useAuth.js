import axiosClient from '@/api-client/axiosClient';
import useSWR from 'swr';

export function useAuth() {
    
    const {
        data: userData,
        isValidating,
        error,
        mutate,
    } = useSWR(`/profile`, {
        dedupingInterval: 1000 * 60 * 60 * 24,
        revalidateOnFocus: false,
        shouldRetryOnError: false,
        revalidateIfStale: false,
    });

    const firstLoading = userData === undefined && error === undefined;

    async function login(body) {
        await axiosClient.post('/login', body);
        await mutate();
    }

    async function logout() {
        await axiosClient.post('/logout');
        await mutate(null, false);
    }

    return {
        userData,
        isValidating,
        error,
        firstLoading,
        login,
        logout,
    };
}
