import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-matrices',
  templateUrl: './matrices.component.html',
  styleUrls: ['./matrices.component.css']
})
export class MatricesComponent implements OnInit {
  @Input('constraints') constraints!: number;
  @Input('variables') variables!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
