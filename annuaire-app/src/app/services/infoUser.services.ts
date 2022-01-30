import { Injectable } from "@angular/core";
import { Utilisateur } from '../models/utilisateur';
import JSON from '../collaborateurs.json';

@Injectable(
    { providedIn: 'root'}
)

export class InfoUserService
{
    users: Utilisateur[] = JSON.results as any;

    getAllUsers() : Utilisateur []
    {
        return this.users;
    }

    getUserById(userId: any) : Utilisateur
    {
        const user = this.users.find(user => user.login.uuid === userId);

        if(!user)
        {
            throw new Error('User not found !');
        }
        else
        {
            return user;
        }    
    }

}