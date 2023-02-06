import '../../styles/global.css'

export function Option({ option }) {
    return (
        <a 
            href={option.href}
            className='bg-black 
                        text-white
                        p-2
                        hover:shadow-menu'
            >
            { option.label }
        </a>
    );
}