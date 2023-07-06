import { Container } from "@mui/material";
import HeaderDefault from "../partials/header";
import { globalConfig } from "../ultils/config";

export default function MainLayout({children}){
    return(
        <>
            <HeaderDefault />
            <Container maxWidth={globalConfig.maxWidth}>
                {children}
            </Container>
        </>
    )
}