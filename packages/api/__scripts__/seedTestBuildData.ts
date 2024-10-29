import { seedTestData } from "./scripts/seedTestData"; 


seedTestData().catch((err) => {
    // eslint-disable-next-line no-console -- Need to log error. Only occurs in development. #MoveToLoggerPackage
    console.error(`Failed to seed test data`, err)
})

