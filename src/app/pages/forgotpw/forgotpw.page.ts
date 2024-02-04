import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpw',
  templateUrl: './forgotpw.page.html',
  styleUrls: ['./forgotpw.page.scss'],
})
export class ForgotpwPage implements OnInit {
  selectedOption: string;

  constructor() { 
    this.selectedOption='option1'
  }

  ngOnInit() {
    
  }

}
