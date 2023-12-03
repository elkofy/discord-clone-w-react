import {Message} from "./Message.ts";
import {User} from "./User.ts";

export interface Chat {
    _id: string;
    icon: string;
    name: string;
    users: User[];
    numberOfMembers: number;
    messages: Message[];
}