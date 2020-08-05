import * as React from 'react';
import * as style from './style.scss'
import { AdminWrapper } from './AdminWrapper';

interface Props {
}

interface State {
}


export class Admin extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);
        this.state = {
        };
    }

    render() {
        return (
            <AdminWrapper>
                Admin
            </AdminWrapper>
        );
    }
}
