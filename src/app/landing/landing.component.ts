import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: 'landing.component.html',
  styles: []
})
export class LandingComponent implements OnInit {

  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

              let lang = navigator.language;


              lang = lang.substr(0,2)  ;
              // İngilizce
              if (lang == "en")
                              this.router.navigate(['./en']);
              // Türkçe
              else if (lang == "tr")
                              this.router.navigate(['./tr']);
             // Brezilya Portekizcesi
              else if (lang == "pt-br")
                              this.router.navigate(['./br']);
             // Portekizce
              else if (lang == "pt")
                              this.router.navigate(['./br']);
             // Endonezce
              else if (lang == "id")
                              this.router.navigate(['./id']);
              else
                              this.router.navigate(['./en']);

             }


}
