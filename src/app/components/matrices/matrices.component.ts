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
  
  addFormControlToList(name: string, length: number) {
    for (let i = 0; i < length; i++) {
      (<FormArray>this.matrices.get(name)).push(
        new FormControl(0, [Validators.required, Validators.min(0), Validators.max(9)])
      );
    }
  }

  getMatrix(name: string, row: number): any {    
    return (<FormArray>this.matrices.get(name)).controls[row].value;
  }

  fakeArray(length: number): Array<any> {
    return new Array(length);
  }

  addFormControlToMatrix(name: string, rows: number, columns: number) {
    for (let row = 0; row < rows; row++) {
      const array: AbstractControl[] = new Array();
      for (let column = 0; column < columns; column++) {
        array.push(
          new FormControl(0, [
            Validators.required,
            Validators.min(0),
            Validators.max(9),
          ])
        );
      }
      (<FormArray>this.matrices.get(name)).push(new FormControl(array))
    }    
  }
}
