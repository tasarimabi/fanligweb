import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../alert.service';
import { UserService } from '../user.service';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
      
    }
}
