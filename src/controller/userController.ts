import type { Request, Response } from "express";

interface User {
    id: number;
    name: string;
}

let users: User[] = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" }
];

export const getUsers = (_req: Request, res: Response) => {
    res.json(users);
};

export const getUserById = (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const user = users.find((u) => u.id === id);

    if (!user) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    res.json(user);
};

export const createUser = (req: Request, res: Response) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            error: "Name is required"
        });
    }

    const newUser: User = {
        id: users.length + 1,
        name
    };

    users.push(newUser);

    res.status(201).json(newUser);
};