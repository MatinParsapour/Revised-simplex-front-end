import { Matrices } from './../../model/matrices';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-matrices',
  templateUrl: './matrices.component.html',
  styleUrls: ['./matrices.component.css'],
})
export class MatricesComponent implements OnInit {
  @Input('constraints') constraints!: number;
  @Input('variables') variables!: number;
  matrices!: FormGroup;

  constructor(private router: Router, private http: HttpClient) {
    this.matrices = new FormGroup({
      targetFunctionValues: new FormArray([]),
      constraintsValues: new FormArray([]),
      resultValues: new FormArray([]),
      basicVariables: new FormControl([], Validators.required),
      nonBasicVariables: new FormControl([], Validators.required)
    });
  }

  ngOnInit(): void {
    this.addFormControlToList('targetFunctionValues', this.variables);
    this.addFormControlToMatrix(
      'constraintsValues',
      this.constraints,
      this.variables
    );
    this.addFormControlToList('resultValues', this.constraints);
  }

  getArray(name: string): Array<any> {
    return (<FormArray>this.matrices.get(name)).controls;
  }

  submit() {
    let matrices = new Matrices();
    this.fillTargetFunctionListInMatricesClass(matrices);
    this.fillConstraintsMatrixInMatricesClass(matrices);
    this.fillResultListInMatricesClass(matrices);
    this.fillBasicVariablesColumnListInMatricesClass(matrices);
    this.fillNonBasicVariablesColumnsListInMatricesClass(matrices);

    console.log(matrices)

    this.http
      .post('http://localhost:8080/value/send-data', matrices)
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['result'])
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
  }

  fillTargetFunctionListInMatricesClass(matrices: Matrices) {
    (<FormArray>this.matrices.get('targetFunctionValues')).value.forEach(
      (element: any) => {
        matrices.getTargetFunctionValues.push(element);
      }
    );
  }

  fillConstraintsMatrixInMatricesClass(matrices: Matrices) {
    for (let i = 0; i < this.constraints; i++) {
      let target = new Array();
      for (let j = 0; j < this.variables; j++) {
        target.push(
          (<FormArray>this.matrices.get('constraintsValues')).controls[i].value[
            j
          ].value
        );
      }
      matrices.getConstraintsValues.push(target);
    }
  }

  fillResultListInMatricesClass(matrices: Matrices) {
    (<FormArray>this.matrices.get('resultValues')).value.forEach(
      (element: any) => {
        matrices.getResultValues.push(element);
      }
    );
  }

  fillBasicVariablesColumnListInMatricesClass(matrices: Matrices) {
    (<FormArray>this.matrices.get('basicVariables')).value.forEach((element:any) => {
      matrices.getBasicVariablesColumns.push(element);
    });;
  }

  fillNonBasicVariablesColumnsListInMatricesClass(matrices: Matrices) {
    (<FormArray>this.matrices.get('nonBasicVariables')).value.forEach((element:any) => {
      matrices.getNonBasicVariablesColumns.push(element);   
    });
  }

  addFormControlToList(name: string, length: number) {
    for (let i = 0; i < length; i++) {
      (<FormArray>this.matrices.get(name)).push(
        new FormControl(0, [Validators.required])
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
      (<FormArray>this.matrices.get(name)).push(new FormControl(array));
    }
  }
}
