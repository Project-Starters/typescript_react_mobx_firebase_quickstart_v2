import * as React from 'react';
import { LoginComponent, AuthWrapper } from 'app/components/AuthComponent';
import { A } from 'app/components/Basic';
import { Redirect } from 'react-router';
import { AUTH_STORE } from 'app/constants';
import { inject, observer } from 'mobx-react';
import { AuthStore } from 'app/stores';

interface Props {
}

interface State {
}


@inject(AUTH_STORE)
@observer
export class Signout extends React.Component<Props, State> {
    store: AuthStore
    constructor(props: Props, context: any) {
        super(props, context);
        this.state = {
        };
        this.store = props[AUTH_STORE]
        this.store?.signOut()
    }
    render() {
        return <Redirect to="/login"/>
    }
}
