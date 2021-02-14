import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./outputTargets/ConsoleReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Perusal {
  static winsAnalysisWithConsoleReport(teamName: string): Perusal {
    return new Perusal(new WinsAnalysis(teamName), new ConsoleReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
