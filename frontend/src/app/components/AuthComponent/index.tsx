import * as React from 'react'
import * as style from './style.scss'
import { AUTH_STORE } from 'app/constants'
import { inject, observer } from 'mobx-react'
import { AuthStore } from 'app/stores'
import { Input, Button } from 'app/components/Inputs'





export const LoginSignup = inject(AUTH_STORE)(observer((props: {
    onClick: ()=>any
}) => {
    const store = props[AUTH_STORE] as AuthStore
    const {email, password, onChange} = store
    return <>
        <Input type="text" value={email} onChange={onChange("email")}/>
        <Input type="password" value={password} onChange={onChange("password")}/>
        <Button onClick={props.onClick}>
            Submit
        </Button>
    </>
}))


export const LoginComponent = inject(AUTH_STORE)(observer((props) => {
    const store = props[AUTH_STORE] as AuthStore
    return <>
        <LoginSignup onClick={store.handleUserLogin}/>
    </>
}))

export const SignupComponent = inject(AUTH_STORE)(observer((props) => {
    const store = props[AUTH_STORE] as AuthStore
    return <>
        <LoginSignup onClick={store.handleUserSignup}/>
    </>
}))

export const AuthWrapper = (props) => {
    return <div className={style.fullPage}>
        <div className={style.wrapper}>
            {props.children}
        </div>
    </div>
}