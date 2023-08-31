import { Routes, Route } from "react-router-dom";

import routes from "../../routes/routes";

const MainRouter = () => {
    return (
        <>

            <Routes>

                {
                    routes.map((route, index) => <Route key={index} {...route} />)
                }

            </Routes>


        </>
    );
}

export default MainRouter;