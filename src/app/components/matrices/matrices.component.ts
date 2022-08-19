import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private http: HttpClient) {
    this.matrices = new FormGroup({
      targetFunctionValues: new FormArray([]),
      constraintsValues: new FormArray([]),
      resultValues: new FormArray([]),
    });
  }

  ngOnInit(): void {
    this.addFormControlToList('targetFunctionValues', this.variables);
    this.addFormControlToMatrix('constraintsValues', this.constraints, this.variables);
    this.addFormControlToList('resultValues', this.constraints);    
  }

  getArray(name: string): Array<any> {
    return (<FormArray>this.matrices.get(name)).controls;
  }

  submit() {
    // console.log(
    //   (<FormArray>this.matrices.get('targetFunctionValues')).value
    // );
    // console.log((<FormArray>this.matrices.get('constraintsValues')).value);
    // console.log((<FormArray>this.matrices.get('resultValues')).value);
    console.log(this.matrices.value);
    this.http.post("http://localhost:8080/value/send-data", this.matrices.value).subscribe(
      response => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        
      }
    )
    this.router.navigate(['result'])
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
      (<FormArray>this.matrices.get(name)).push(new FormControl(array))
    }    
  }
}
