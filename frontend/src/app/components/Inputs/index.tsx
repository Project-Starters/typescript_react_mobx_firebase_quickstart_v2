import * as React from 'react'
import * as style from './style.scss'

interface InputProps extends React.HTMLProps<HTMLInputElement> {

}
export const Input = React.forwardRef((props: InputProps, ref) => {
    return <input className={style.input} ref={ref as any} {...props} />
})


interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

export const Button = (props: ButtonProps) => {
    return <button className={style.button} {...props}>
        {props.children}
    </button>
}