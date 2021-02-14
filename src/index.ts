import { MatchReader } from "./MatchReader";
import { Perusal } from "./Perusal";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./outputTargets/ConsoleReport";
// import { HtmlReport } from "./outputTargets/HtmlReport";

// const csvFileReader = new CsvFileReader("football.csv");
// const matchReader = new MatchReader(csvFileReader);

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const perusal = new Perusal(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);

// const perusal = Perusal.winsAnalysisWithConsoleReport("Man United");

perusal.buildAndPrintReport(matchReader.matches);
