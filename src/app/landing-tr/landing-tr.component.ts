import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-tr',
  template: '',
  styles: []
})
export class LandingTrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.replace('https://fanlig.co/tr')
  }

}
