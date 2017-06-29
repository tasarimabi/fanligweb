import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-id',
  template: '',
  styles: []
})
export class LandingIdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.replace('https://fanlig.co/br/')
  }

}
