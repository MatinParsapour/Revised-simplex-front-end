import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constraints!: number;
  variables!: number;

  constructor(private route: ActivatedRoute) {
    this.constraints = +this.route.snapshot.queryParams['constraints'];
    this.variables = +this.route.snapshot.queryParams['variables'];
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.constraints = +queryParams['constraints'];
      this.variables = +queryParams['variables'];
      console.log({
        'Constraints ': this.constraints,
        'Variables: ': this.variables,
      });
    });
  }

}
