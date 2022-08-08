import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-inputs',
  templateUrl: './user-inputs.component.html',
  styleUrls: ['./user-inputs.component.css']
})
export class UserInputsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(form: NgForm){
    this.router.navigate(['main'],{queryParams: {'constraints': form.value['constraints'], 'variables': form.value['variables']}})
  }

}
