import { setIsLoading } from "@/appState/slices/auth-slice";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";


interface UseAppwriteOptions<T, P extends Record<string, String | number>> {
    fn: (params: P) => Promise<T>;
    params?: P;
    skip?: boolean
}

interface UseAppwriteReturn<T,P> {
    data: T | null;
    loading : boolean;
    error: string | null;
    refetch: (Params: P) => Promise<void>
}

export const useAppwrite = <T , P extends Record<string, string | number>>({
    fn,
    params= {} as P,
    skip= false,
}: UseAppwriteOptions<T,P>): UseAppwriteReturn<T, P> => {
    const [data, setData]= useState<T | null>(null);
    const [loading, isLoading]= useState<boolean>(!skip)
    const [error, setError]= useState<string | null>(null)

    const fetchData= useCallback(
        async (fetchParams: P)=> {
            setIsLoading(true)
            setError(null)

            try {
                // we are doing for dev pursposes as we are still not connected to the internet
                // const results= await fn({...fetchParams})
                // setData(results)
            } catch (error: unknown) {
                const errorMessage= error instanceof Error ? error.message : "An unknown error occured";
                setError(errorMessage)
                Alert.alert('Error', errorMessage)
            } finally {
                setIsLoading(false)
            }
        }, [fn]
    )

    useEffect(()=> {
        if (!skip) {
            fetchData(params)
        }
    })

    const refetch= async (newParams? : P)=> await fetchData(params)

    return {data, loading, error, refetch}

}