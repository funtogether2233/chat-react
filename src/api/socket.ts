import { io } from 'socket.io-client';

const baseURL = 'http://localhost:3000';

export const socket = io(baseURL);
