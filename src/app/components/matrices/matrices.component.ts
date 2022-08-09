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
  getArray(name: string): Array<any> {
    return (<FormArray>this.matrices.get(name)).controls;
  }

  submit() {
    console.log(
      (<FormArray>this.matrices.get('targetFunctionValues')).controls
    );
    console.log((<FormArray>this.matrices.get('constraintsValues')).controls);
    console.log((<FormArray>this.matrices.get('resultValues')).controls);
  }
  }

}
