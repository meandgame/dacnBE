import mongoose, { Document } from "mongoose";

// USER
export interface UserCreateInterface {
    password: string;
    fullname: string;
    username: string;
    phone?: string;
    email?: string;
}

export interface UserUpdateInterface {
    name?: string;
    password?: string;
}

export interface UserDocument extends Document {
    fullname?: string | null;
    username?: string | null;
    password: string;
    email?: string | null;
    phone?: string | null;
    avatar?: string | null;
    biography?: string | null;
    score: number;
    channels: string[];
    createdAt?: Date;
    updatedAt?: Date;
}
