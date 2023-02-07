import '../../styles/global.css'

export function Card({href, label, price}) {
    return (
        <figure 
            className='bg-white
                       flex
                       flex-col
                       gap-1
                       hover:shadow-card
                       w-[14vw]
                       truncate
                       '
        >
            <img 
                src={href} 
                alt=""
                className='w-[14vw]
                           h-[200px]'
            />
            <figcaption>
                <h1
                >{ label }</h1>
                {
                    price != null &&
                    <p>{ price }</p>
                }
            </figcaption>
        </figure>
    );
}