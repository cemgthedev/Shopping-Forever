import { Menu as MenuReact } from '@headlessui/react'

import '../../styles/global.css'

export function Menu({ name }) {
    return (
        <MenuReact>
            <MenuReact.Button 
                className='bg-black 
                          text-white
                          p-2
                          hover:shadow-menu'
                >
                { name }
            </MenuReact.Button>
        </MenuReact>
    );
}