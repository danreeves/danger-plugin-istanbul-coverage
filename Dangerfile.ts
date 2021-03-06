import { danger, schedule } from "danger"

import { istanbulCoverage } from "./src/index"

schedule(
  istanbulCoverage({
    reportFileSet: "modified",
    threshold: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
  })
)
