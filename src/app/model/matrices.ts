export class Matrices {
  private targetFunctionValues: Array<Number> = new Array();
  private constraintsValues: Array<Array<Number>> = new Array();
  private resultValues: Array<Number> = new Array();
  private basicVariablesColumns: Array<Number> = new Array();
  private nonBasicVariablesColumns: Array<Number> = new Array();

  get getTargetFunctionValues() {
    return this.targetFunctionValues;
  }

  get getConstraintsValues() {
    return this.constraintsValues;
  }

  get getResultValues() {
    return this.resultValues;
  }

  get getBasicVariablesColumns(){
    return this.basicVariablesColumns;
  }

  get getNonBasicVariablesColumns(){
    return this.nonBasicVariablesColumns;
  }
}