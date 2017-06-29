import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../alert.service';
import { UserService } from '../user.service';
import { User} from '../user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
      currentUser: User;
      model: any = {};
      loading = false;
      returnUrl: string;

      constructor(
          private route: ActivatedRoute,
          private router: Router,
          private userService: UserService,
          private alertService: AlertService) {  }

        success(message: string) {
            this.alertService.success(message);
        }

        error(message: string) {
            this.alertService.error(message);
        }

        info(message: string) {
            this.alertService.info(message);
        }

        warn(message: string) {
            this.alertService.warn(message);
        }

        clear() {
            this.alertService.clear();
        }
        refresh(): void {
            window.location.reload();
        }

      ngOnInit() {

      }


      post() {
          this.loading = true;
          this.userService.post(this.model.text, this.model.link)
              .subscribe(
                  data => {
                      this.success('Post Success, close this message for share new post!');
                      this.router.navigate(['/dist']);
                  },
                  error => {
                      this.alertService.error(error);
                      this.loading = false;
                  });


      }

}
