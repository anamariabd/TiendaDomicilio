import React from "react"
import { Route, Redirect, RouteProps} from "react-router-dom"
import { useAuth } from "./Controller/UserController"

type PrivateRouteProps = {
  component: React.ElementType;
  path: string;
};


export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser!? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}
