import * as React from 'react';
import * as style from './style.scss'
import { AUTH_STORE } from 'app/constants';
import { inject, observer } from 'mobx-react';
import { AuthStore } from 'app/stores';
import {Link} from 'react-router-dom'

interface navItem {
    key: string
    name: string
    link: string
    imgSrc: string
}
interface Props {
    navItems: navItem[]
}

interface State {
}

const defaultProfilePic = "https://placehold.it/256x256"


export class Sidebar extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);
        this.state = {
        };
    }

    render() {
        const { navItems } = this.props
        return (
            <nav id={style.navbar}>
                <ul id={style.navbarNav}>
                    <UserInfo />
                    {navItems.map((navItem) => (
                        <li key={navItem.key}>
                            <Link to={navItem.link}>
                                <img src={navItem.imgSrc} />
                                <span>
                                    {navItem.name}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

const UserInfo = inject(AUTH_STORE)(observer((props) => {
    const store = props[AUTH_STORE] as AuthStore
    const photoURL = store.userData!.userData.photoURL
    const img = photoURL ? photoURL : defaultProfilePic
    return (
        <li>
            <Link to={"/profile"}>
                <img src={img}/>
                <span>
                    {store.user.displayName}
                </span>
            </Link>
        </li>
    )
}))