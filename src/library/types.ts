export interface ToolbarButton<T = any> {
    text: string;
    secondaryText: string
    value: T;
    onClick: (e: Event) => void;
    icon: string
}