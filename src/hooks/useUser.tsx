import { useState } from "react";
import {User} from "../ts/interfaces/User.ts";
import {createCurrentUser} from "../services/fakerApi.tsx";
import {useMountEffect} from "./useMountEffect.tsx";


export const useUser = () => {
    const [user, setUser] = useState<User>()
    useMountEffect(() => {
        (async () => {
            const user = createCurrentUser()
            setUser(user)
            localStorage.setItem('currentUser',JSON.stringify(user))
        })();
    })

    return { user }
}