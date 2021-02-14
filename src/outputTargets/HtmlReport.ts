import fs from "fs";
import { OutputTarget } from "../Perusal";

export class HtmlReport implements OutputTarget {
  constructor(public fileName: string) {}

  print(report: string): void {
    const html = `<body><div><h1>Analysis Output</h1><div>${report}</div></div></body>`;

    const outFileName = this.fileName.endsWith(".html")
      ? this.fileName
      : `${this.fileName}.html`;

    fs.writeFileSync(outFileName, html);
  }
}
