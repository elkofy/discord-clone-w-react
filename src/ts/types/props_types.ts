import {Server} from "../interfaces/Server.ts";
import {Chat} from "../interfaces/Chat.ts";

export type DirectMessages = {
    directMessages: Chat[];
}

export type Servers ={
    servers: Server[];
}