
import { Route, Routes } from "react-router-dom";
import { routesPath } from "../utils/route-path";
// import Exchange from "../pages/app/exchange";
import PageNotFound from "../pages/404";
import { lazy } from "react";

const Exchange = lazy(() => import("../pages/app/exchange"))


export default function AppRoute() {
    const { EXCHANGE } = routesPath;
    return (
        <>
            <Routes>
                <Route path={EXCHANGE} element={<Exchange />} />
                <Route path={"*"} element={<PageNotFound />} />
            </Routes>
        </>
    );
}
