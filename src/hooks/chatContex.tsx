import {createContext, useContext} from 'react';
import {createChats} from "../services/fakerApi.tsx";
const ChatsContext = createContext(createChats());
