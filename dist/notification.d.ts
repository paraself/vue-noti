interface IOptions {
    title: string;
    text?: string;
    group?: string;
    onClick?: () => void;
    onClose?: () => void;
}
declare function notify(options: IOptions): void;
export default notify;
