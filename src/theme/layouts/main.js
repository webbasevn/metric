import { Container } from "@mui/material";
import HeaderDefault from "../partials/header";
import { globalConfig } from "../ultils/config";
import { useAuth } from "@/hooks/useAuth";
import LoadingScreen from "@/components/loading/screen";
import { useRouter } from "next/router";

export default function MainLayout({children}){

    const router = useRouter()

    const {userData,firstLoading} = useAuth()

    console.log("user data" , userData)

    if(firstLoading) return <LoadingScreen />

    if(!userData){
        router.push('/login')
        return <LoadingScreen />
    }

    return(
        <>
            <HeaderDefault />
            <Container maxWidth={globalConfig.maxWidth}>
                {children}
            </Container>
        </>
    )
}