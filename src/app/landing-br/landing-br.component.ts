import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-br',
  template: '',
  styles: []
})
export class LandingBrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.replace('https://fanlig.co/br/')
  }

}
