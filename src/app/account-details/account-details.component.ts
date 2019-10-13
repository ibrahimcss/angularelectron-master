import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickSuccess() {
    Swal.fire('Success', 'Selam', 'success');
  }

  clickWarning() {
    Swal.fire('Success', 'Selam', 'warning');

  }

  clickDanger() {
    Swal.fire('Success', 'Selam', 'question');
  }
}
