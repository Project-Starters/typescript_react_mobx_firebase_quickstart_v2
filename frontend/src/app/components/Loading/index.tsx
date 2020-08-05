import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { AUTH_STORE } from 'app/constants';
import { AuthStore } from 'app/stores';

export const LoadingPage = ():any => {
    return <div>
        loading...
    </div>
}

interface Props {
    loading: boolean
    children: React.ReactNode
}
export const Loading: React.FC<Props> = (props: Props):any => {
    if(props.loading){
        return <LoadingPage/>
    }
    return props.children?props.children:null
}

export const AuthStoreLoading: React.FC<{}> = inject(AUTH_STORE)(observer((props):any=>{
    const store = props[AUTH_STORE] as AuthStore
    return <Loading loading={store.loading}>
        {props.children}
    </Loading>
}))