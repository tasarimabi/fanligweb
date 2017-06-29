import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
    selector: 'app-home',
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    currentUser: User;

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
      //  this.loadAllUsers();


    }

    /*deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }*/

}
