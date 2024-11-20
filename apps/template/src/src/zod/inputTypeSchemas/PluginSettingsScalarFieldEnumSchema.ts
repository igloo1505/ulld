import { z } from 'zod';

export const PluginSettingsScalarFieldEnumSchema = z.enum(['pluginName','data','firstSync','lastSync']);

export default PluginSettingsScalarFieldEnumSchema;
