import {createCurrentUser} from "../../services/fakerApi.tsx";
import {User} from "../interfaces/User.ts";

export function getCurrentUser ():User {
    try {
        const user = JSON.parse(localStorage.getItem('currentUser') ?? '');
        return user as User
    }
    catch (error)
    {
        console.log('no user detected ? guest is here');
        return createCurrentUser();
    }

}

export function getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}