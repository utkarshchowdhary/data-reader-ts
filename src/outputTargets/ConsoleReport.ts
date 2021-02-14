import { OutputTarget } from "../Perusal";

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
