import { Component, Input, OnInit } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { InfoUserService } from '../services/infoUser.services';

@Component(
{
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit 
{
  @Input() users!: Utilisateur;

  usersInfo!: Utilisateur[];
  moins40!: string;
  entre40et60!: string;
  plus60!: string;
  chevron!: string;

  constructor(private infoUserService: InfoUserService) {}

  ngOnInit()
  {
    this.usersInfo = this.infoUserService.getAllUsers();
    this.chevron = "../../assets/chevron.png";
    this.moins40 = "../../assets/rookie.svg";
    this.entre40et60 = "../../assets/advance.svg";
    this.plus60 = "../../assets/expert.svg";
  }
}
