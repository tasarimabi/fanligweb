import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-en',
  templateUrl: 'landing-en.component.html',
  styleUrls: ['landing-en.component.scss']
})
export class LandingEnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.replace('https://fanlig.co/en')
  }

}
