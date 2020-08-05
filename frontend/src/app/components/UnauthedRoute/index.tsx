import * as React from "react";
import { Route, RouteProps, Redirect } from "react-router";
import { inject, observer } from "mobx-react";
import { AUTH_STORE } from "app/constants";
import { AuthStore } from "app/stores";

export interface UnauthedRouteProps extends RouteProps {
}

export interface UnauthedRouteState {

}
@inject(AUTH_STORE)
@observer
export class UnauthedRoute extends React.Component<UnauthedRouteProps, UnauthedRouteState> {
    private store: AuthStore
    constructor(props: UnauthedRouteProps, context: any) {
        super(props, context);
        this.state = {};
        this.store = props[AUTH_STORE]
    }

    render() {
        if (this.store.isLoggedIn) {
            return <Redirect to="/app"/>
        } else {
            return (
                <Route {...this.props} />
            );

        }
    }
}