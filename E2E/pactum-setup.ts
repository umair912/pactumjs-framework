import { reporter } from "pactum";
import { PactumJestHtmlReporterAppender } from "./reporting/pactum-html-appender";

global.beforeAll(() => {
  //@ts-ignore
  reporter.add(PactumJestHtmlReporterAppender);
});
