import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { InfoUserService } from '../services/infoUser.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infouser',
  templateUrl: './infouser.component.html',
  styleUrls: ['./infouser.component.css']
})
export class InfouserComponent implements OnInit {

  @Input() users!: Utilisateur;
  usersInfo!: Utilisateur[];
  chevron!: string;
  
  constructor(private infoUserService: InfoUserService,
              private route: ActivatedRoute) {}

  ngOnInit()
  {
    const userId = this.route.snapshot.params['id'];
    this.users = this.infoUserService.getUserById(userId);
    this.chevron = "../../assets/chevron.png";
  }

}
