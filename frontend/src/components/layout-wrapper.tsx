import Layout from "@/Pages/layout/Layout";
import { Outlet } from "react-router";


const LayoutWrapper = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}


export default LayoutWrapper;