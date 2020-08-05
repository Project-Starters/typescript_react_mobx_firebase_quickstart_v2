import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { AUTH_STORE } from 'app/constants';
import { AuthStore } from 'app/stores';
import { Redirect, Route } from 'react-router';
import { user_roles } from 'shared/lib/shared_types';
import { LoadingPage } from 'app/components/Loading';
import { ErrorComponent } from 'app/components/ErrorComponent';
import { UserInfo } from 'app/containers/UserInfo';

interface Props {
	allowedRoles: user_roles[]
	children: React.ReactNode
	path: string
	[AUTH_STORE]?: AuthStore
}

const hasRole = (allowedRoles: user_roles[], userRoles: user_roles[]): boolean => {
	return allowedRoles.filter((role) => (userRoles.indexOf(role) != -1)).length > 0
}
export const RouteGuard: React.FC<Props> = inject(AUTH_STORE)(observer(
	(props: Props): any => {
		const { [AUTH_STORE]: store, children, allowedRoles, ...rest } = props

		// must be deconstructed in this method because the render method is not an observer
		const {loading} = store!.user
		console.log("test hello")
		return <Route {...rest} render={props => {
			if (loading) {
				return <LoadingPage />
			} else {
				if (store!.isLoggedIn) {
					if (store!.userData !== undefined) {
						const data = store!.userData
						if (hasRole(allowedRoles, data.roles)) {
							return children;
						} else {
							return <ErrorComponent message={"You are not authorized"} />
						}
					}
				}
			}
			return <Redirect to='login' />
		}} />

	}))


interface CompletedSignupProps {
	children: React.ReactNode
	path: string
	[AUTH_STORE]?: AuthStore
}

export const CompletedSignup = inject(AUTH_STORE)(observer((props: CompletedSignupProps): any => {
	const { [AUTH_STORE]: store, children, ...rest } = props
	const {loading, isLoggedIn} = store!.user
	return <Route {...rest} render={(props)=>{
		if (loading) {
			return <LoadingPage/>
		}else{
			if (isLoggedIn) {
				if (store?.user !== undefined) {
					if (store?.user.isCompleted) {
						return children;
					} else {
						return <UserInfo />
					}
				}
			}
		}
	}}/>

}))

