import * as React from 'react';
import { LoginComponent, AuthWrapper } from 'app/components/AuthComponent';
import { A } from 'app/components/Basic';

interface Props {
}

interface State {
}


// @inject(AUTH_STORE)
// @observer
export class Login extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);
        this.state = {
        };
    }
    render() {
        console.log("login")
        return (
            <AuthWrapper>
                <h1> Login </h1>
                <LoginComponent />
                <A to="/signup">
                    Signup
                </A>
            </AuthWrapper>
        )
    }
}
