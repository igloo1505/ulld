import { z } from 'zod';

export const SettingsOrderByRelevanceFieldEnumSchema = z.enum(['title','lockedLandingImage','plotTheme']);

export default SettingsOrderByRelevanceFieldEnumSchema;
