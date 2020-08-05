import * as React from 'react';
import { AUTH_STORE } from 'app/constants';
import { observer, inject } from 'mobx-react';
import { AuthStore } from 'app/stores';
import { UserInfoForm } from 'app/components/Forms/UserInfo';

export const UserInfo = inject(AUTH_STORE)(observer((props) => {
    const store = props[AUTH_STORE] as AuthStore


    const onSubmit = (vals) => {
        console.log(vals)
        store.user.updateUserDoc(vals)
    }
    return <UserInfoForm data={store.user.userData?.userData} onSubmit={onSubmit}/>
}))