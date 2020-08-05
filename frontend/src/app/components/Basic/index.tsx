import * as React from 'react'
import * as style from './style.scss'
import { Link, LinkProps } from 'react-router-dom'




interface AProps extends LinkProps{

}
export const A = (props: AProps) => {
    return <Link className={style.a} {...props}/>
}