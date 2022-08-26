import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  attempts: any;
  basicVariables: any;
  nonBasicVariables: any;
  optimalResult: any;
  optimalValues: any;

  constructor(private http: HttpClient) {
    this.getAttempts();
    this.getBasicVariables();
    this.getNonBasicVariables();
    this.getOptimalResult();
    this.getOptimalValues();
  }

  ngOnInit(): void {}

  getAttempts() {
    this.http.get('http://localhost:8080/result/get-attempts').subscribe(
      (response) => {
        this.attempts = response;
        console.log('attempts', this.attempts);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  getOptimalValues() {
    this.http.get('http://localhost:8080/result/get-optimal-values').subscribe(
      (response) => {
        this.optimalValues = response;
        console.log('Optimal values', this.optimalValues);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  getNonBasicVariables() {
    this.http
      .get('http://localhost:8080/result/get-non-basic-variables')
      .subscribe(
        (response) => {
          this.nonBasicVariables = response;
          console.log('Non basic variables', this.nonBasicVariables);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
  }

  getBasicVariables() {
    this.http.get('http://localhost:8080/result/get-basic-variables').subscribe(
      (response) => {
        this.basicVariables = response;
        this.extractBasicVariables();
        console.log('Basic variables', this.basicVariables);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  getOptimalResult() {
    this.http.get('http://localhost:8080/result/get-optimal-result').subscribe(
      (response) => {
        this.optimalResult = response;
        console.log('result', this.optimalResult);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  extractBasicVariables() {
    this.basicVariables.forEach((element: any) => {
      console.log('basic variable', element);
    });
  }

  basicVariableRowSize() {
    return this.basicVariables.size();
  }

  basicVariableColumnSize() {
    return this.basicVariables[0].size();
  }

  getValueOfBasicVariable(row: any, column: any) {
    return this.basicVariables[row][column];
  }
}
