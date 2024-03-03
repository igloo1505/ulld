import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { AdmonitionType, IconNameList } from './types';
import { internalLogoIconNames, iconNameMap } from './data';





export type ValidIconName = IconNameList | AdmonitionType | keyof typeof dynamicIconImports;


interface IconProps extends LucideProps {
    name: ValidIconName
}

export const DynamicIcon = ({ name, ...props }: IconProps) => {
    if (internalLogoIconNames.includes(name as any)) {
        let Icon = dynamic(() => import(`../../components/icons/logos/${name}`))
        return <Icon {...props} />
    }
    let _name = name in iconNameMap ? iconNameMap[name as keyof typeof iconNameMap] : name
    const LucideIcon = dynamic(dynamicIconImports[_name as keyof typeof dynamicIconImports])
    return <LucideIcon {...props} />;
};

