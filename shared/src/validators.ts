import {Length, MinLength, MaxLength} from 'class-validator' 
import { userData_i } from './shared_interfaces';

class ValidatorBaseClass<t>{
    constructor(data: t){
        for (let key in data) {
            this[key as unknown as keyof this] = data[key] as any;
        }
    }
}

export class submitUserData_v<t> extends ValidatorBaseClass< & t> implements userData_i{
    @Length(2, 20, {message: "Name incorrect length"})
    displayName: string;
    @MinLength(0, {message: "bio is too short"})
    @MaxLength(300, {message: "bio is too long"})
    bio: string;
}