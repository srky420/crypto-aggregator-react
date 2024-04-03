

// Define interface
interface Props {
    variant: string;
    size: string;
    text: string;
    disabled?: boolean;
    onClick?: any;
}

export const Button = (props: Props) => {

    let className: string = 'font-inter rounded-full ';
    // Set size
    className += props.size === 'lg' ? 'px-8 py-5 ' : 'px-6 py-3 ';

    // Set variant
    switch (props.variant) {
        case 'light':
            className += 'bg-gray-50 hover:bg-gray-100 transition-all border';
            break;
        case 'dark':
            className += 'bg-gray-900 text-white hover:bg-opacity-80 transition-all'
            break;
        case 'primary':
            className += 'bg-gradient-to-r from-pink-500 to-indigo-500 text-white hover:bg-gradient-to-l'
            break;
    }

    return (
        <button className={className} dangerouslySetInnerHTML={{ __html: props.text }} onClick={props.onClick}>
        </button>
    )
}