import {User} from "../ts/interfaces/User.ts";
import {faker} from "@faker-js/faker";
import {Server} from "../ts/interfaces/Server.ts";
import {Chat} from "../ts/interfaces/Chat.ts";
import {Message} from "../ts/interfaces/Message.ts";
import {getCurrentUser, getRandomInt} from "../ts/utils/utils.ts";

// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

export function createRandomUser(): User {
    return {
        _id: faker.string.uuid(),
        avatar: faker.image.avatar(),
        username: faker.internet.displayName(),
    }
}

export function createCurrentUser(): User {
    const currentUser:User= {
        _id: faker.string.uuid(),
        avatar: faker.image.avatar(),
        username: faker.internet.displayName(),
    }
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
    return currentUser
}

export function createRandomServer(): Server {
    return {
        _id: faker.string.uuid(),
        icon: faker.image.url(),
        name: faker.internet.displayName(),
    }
}

export function createRandomChat(): Chat {
    const chat: Record<string, string | number | User[] | Message[]> = {
        _id: faker.string.uuid(),
        icon: faker.image.url(),
        users: createUsers(),
    };
    chat.name= (chat?.users as User[]).filter(function(user) { return user.username !== getCurrentUser().username; })[0].username
    chat.numberOfMembers = (chat?.users as User[]).length ?? 1;

    chat.messages = createConversations(chat.users as User[]);


    return chat as unknown as Chat;
}

export function createRandomMessage(): Message {
    return {
        _id: faker.string.uuid(),
        user: createRandomUser(),
        text: faker.word.words({count: {min: 5, max: 10}}),
        date: faker.date.recent(),
    }
}

export function createMessageFromUser(user: User): Message {
    return {
        _id: faker.string.uuid(),
        user: user,
        text: faker.word.words({count: {min: 5, max: 10}}),
        date: faker.date.recent(),
    }
}

export function createConversations(users: User[], number: number = 5): Message[] {
    const messages = []
    const members = users.length;
    let i = 0;
    while (i < number) {
        messages.push(createMessageFromUser(users[getRandomInt(0,members)]));
        i++;
    }
    return messages;
}

export function createServers(number: number = 3): Server[] {
    const servers = []
    let i = 0;
    while (i < number) {
        servers.push(createRandomServer())
        i++;
    }
    return servers;
}

export function createChats(number: number = 2): Chat[] {
    const chats = []
    let i = 0;
    while (i < number) {
        chats.push(createRandomChat())
        i++;
    }
    return chats;
}

export function createUsers(number: number = 2): User[] {
    const users = []
    let i = 0;
    while (i < number) {
        i % 2 == 0 ?
            users.push(createRandomUser()) :
            users.push(getCurrentUser());
        i++;
    }
    return users;
}

