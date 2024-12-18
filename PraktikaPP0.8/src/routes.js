import Auth from "./pages/auth"
import Registration from "./pages/registration"
import HistoryRequest from "./pages/historyRequest"
import NewRequest from "./pages/admin"
import Admin from "./pages/newRequest"
import {LOGIN_ROUTE, REGISTRATION_ROUTE, HISTORYREQUEST, NEWREQUEST, ADMIN_ROUTE } from "./utils/consts"

export const authRoutes = [
   
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: HISTORYREQUEST,
        Component: HistoryRequest
    },
    {
        path: NEWREQUEST,
        Component: NewRequest
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]