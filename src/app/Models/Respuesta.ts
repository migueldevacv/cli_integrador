import { Token, User } from "./User";

export interface Respuesta {
    mensaje?: string;
    usuario?: User;
    usuarios?: User[];
    access_token?: Token;
}