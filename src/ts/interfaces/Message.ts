import {User} from "./User.ts";

export interface Message {
    _id: string;
    user: User;
    date: Date;
    text: string;
}