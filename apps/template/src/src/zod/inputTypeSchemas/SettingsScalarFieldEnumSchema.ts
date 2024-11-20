import { z } from 'zod';

export const SettingsScalarFieldEnumSchema = z.enum(['id','tooltips','title','summary_showCitations','summary_showTags','landingImageAlign','lockedLandingImage','cleanOnSync','plotTheme','firstSync','lastSync']);

export default SettingsScalarFieldEnumSchema;
