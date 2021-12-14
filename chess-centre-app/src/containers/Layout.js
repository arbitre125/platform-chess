import React, { useContext, Suspense, useEffect, lazy } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Navigation/AuthHeader";
import Main from "../containers/Main";
import ThemedSuspense from "../components/ThemedSuspense";
import { SidebarContext } from "../context/SidebarContext";

const routes = [
  {
    path: "/dashboard",
    component: lazy(() => import("../pages/App/Dashboard")),
  },
  {
    path: "/events",
    component: lazy(() => import("../pages/App/Events")),
  },
  {
    path: "/results",
    component: lazy(() => import("../pages/App/Results")),
  },
  {
    path: "/players",
    component: lazy(() => import("../pages/App/Players")),
  },
  {
    path: "/juniors",
    component: lazy(() => import("../pages/App/Juniors")),
  },
  {
    path: "/upgrade",
    component: lazy(() => import("../pages/App/Upgrade")),
  },
  {
    path: "/roadmap",
    component: lazy(() => import("../pages/App/Roadmap")),
  },
  {
    path: "/profile",
    component: lazy(() => import("../pages/App/User/Profile")),
  },
  {
    path: "/games",
    component: lazy(() => import("../pages/App/Games")),
  },
  {
    path: "/games/:memberId",
    component: lazy(() => import("../pages/App/Games")),
  }
];

const Page404 = lazy(() => import("../pages/Error/404"));

function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    closeSidebar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSidebarOpen && "overflow-hidden"
      }`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Switch>
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`/app${route.path}`}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })}
              <Redirect exact from="/app" to="/app/dashboard" />
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </Main>
      </div>
    </div>
  );
}

export default Layout;
