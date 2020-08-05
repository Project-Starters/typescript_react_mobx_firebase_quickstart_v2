import * as React from 'react';
import { Input, Button } from 'app/components/Inputs';
import { useForm } from "react-hook-form";
import { userData_i } from 'shared';
import { initializeFormData } from 'app/helpers';

export const UserInfoForm = (props: {
    data?: userData_i,
    onSubmit: (vals: object) => any
}) => {
    
    const formData = initializeFormData(props.data, {})
    console.log("FORM DATA", formData)

    const { handleSubmit, register, errors } = useForm({defaultValues: formData});
    const onSubmit = (vals) => {
        props.onSubmit(vals)
    }
    return <form onSubmit={handleSubmit(onSubmit)}>
        <h1>User Info</h1>

        <label>
            Display Name
            <Input name="displayName"  ref={register()}/>
        </label>

        <label>
            Bio
            <Input name="bio" ref={register()}/>
        </label>
        <Button type="submit">
            Submit
        </Button>
    </form>
}