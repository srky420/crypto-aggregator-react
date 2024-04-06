

// Define interface
interface Props {
    variant: string;
    size: string;
    text: string;
    disabled?: boolean;
    onClick?: any;
}

export const Button = (props: Props) => {

    let className: string = 'font-inter rounded-full group transition-all ';
    // Set size
    if (props.variant === 'icon') {
        className += props.size === 'lg' ? 'w-16 h-16 ' : 'w-12 h-12 '
    }
    else {
        className += props.size === 'lg' ? 'px-8 py-5 ' : 'px-6 py-3 ';
    }

    // Set variant
    switch (props.variant) {
        case 'light':
            className += 'bg-gray-50 hover:bg-gray-200 border';
            break;
        case 'dark':
            className += 'bg-gray-900 text-white hover:bg-opacity-80';
            break;
        case 'primary':
            className += 'bg-gradient-to-r from-pink-600 to-indigo-600 text-white hover:bg-gradient-to-l';
            break;
        case 'icon':
            className += 'bg-gray-50 hover:bg-gray-200 border flex justify-center items-center';
            break;
    }

    return (
        <button className={className} dangerouslySetInnerHTML={{ __html: props.text }} onClick={props.onClick}>
        </button>
    )
}