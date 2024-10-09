import { useFormContext } from "@ulld/full-form/form";
import { NavigationFormSettingSchema } from "../form/schema";

export const useNavSettingsForm = () => useFormContext<NavigationFormSettingSchema>();

