export interface EmbeddableComponent {
    component: React.FC<any> | ((props: any) => Promise<JSX.Element>)
    regex: string[]
    }
