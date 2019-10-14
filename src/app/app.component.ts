import {Component, ViewChild} from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/animations';
import {AuthenticationService} from './_services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
     trigger('slideIn', [
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'testapp';
  isExpanded: boolean;



  constructor(private authenticationService: AuthenticationService ) {
    this.isExpanded = false;
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
    }
    logOut(){
this.authenticationService.logout();
console.log(this.authenticationService.state);

    }


}
