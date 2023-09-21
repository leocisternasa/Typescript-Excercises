export class Matrix {
  private readonly getRows: number[][];

  constructor(input: string) {
    this.getRows = input.split("\n").map((row) => row.split(" ").map(Number));
  }

  get rows(): number[][] {
    return this.getRows;
  }

  get columns(): number[][] {
    const columns: number[][] = [];
    for (let col = 0; col < this.rows[0].length; col++) {
      columns.push(this.rows.map((row) => row[col]));
    }
    return columns;
  }
}
