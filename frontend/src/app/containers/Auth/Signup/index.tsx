import * as React from 'react';
import { SignupComponent, AuthWrapper } from 'app/components/AuthComponent';
import { A } from 'app/components/Basic';

interface Props {
}

interface State {
}


// @inject(AUTH_STORE)
// @observer
export class Signup extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);
        this.state = {
        };
    }
    render() {
        console.log("signup")
        return (
            <AuthWrapper>
                <h1> Signup </h1>
                <SignupComponent />
                <A to="/login">
                    Login
                </A>
            </AuthWrapper>
        );
    }
}
