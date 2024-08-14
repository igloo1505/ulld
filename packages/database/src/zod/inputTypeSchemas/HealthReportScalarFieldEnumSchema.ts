import { z } from 'zod';

export const HealthReportScalarFieldEnumSchema = z.enum(['id','title','summary','overall','skin','bloat','weight_feeling','fullness','weight','cardiacCapacity','jawLine','joints','flexibility','anxiety','anxiety_desc','mood_desc','mood','sexDrive','intruisiveThoughts','caffeineIntake','glutenIntake','sugarIntake','artificialSweetenerIntake','artificalDyes','sleepQuality','hydration','twitching','sleepHours','calorie_est','times_meals_more_than_gap_apart','estHoursInExcessFast','dietId','created']);

export default HealthReportScalarFieldEnumSchema;
