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
  matrices!: FormGroup;

  constructor() {
    this.matrices = new FormGroup({
      targetFunctionValues: new FormArray([]),
      constraintsValues: new FormArray([]),
      resultValues: new FormArray([]),
    });
  }

  ngOnInit(): void {
  }

}
