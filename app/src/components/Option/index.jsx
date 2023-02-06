import '../../styles/global.css'
import { Menu } from '@headlessui/react';
import { Fragment } from 'react';

export function Option({ option }) {
    return (
        <Menu>
            {
                option.links == null &&
                <a 
                    href={option.href}
                    className='bg-black 
                                text-white
                                p-2
                                hover:shadow-menu'
                >
                    { option.label }
                </a>
            }
            {
                option.links != null &&
                <div
                    className='bg-black 
                             text-white
                               p-2
                               hover:shadow-menu
                               relative
                               '
                >
                    <Menu.Button>
                        { option.label }
                    </Menu.Button>
                    <Menu.Items
                        className='bg-slate-50
                                   text-black
                                   absolute
                                   top-12
                                   flex
                                   flex-col
                                   gap-2
                                   p-2
                                   rounded-md'
                    >
                        {
                            option.links.map((link) => (
                                <Menu.Item
                                    className='p-2 rounded-md'
                                    key={link.href}
                                    as={Fragment}
                                >
                                    {
                                        ({active}) => (
                                            <a 
                                                className={`${active && 'bg-cyan-500'}`}
                                                href={link.href}
                                            >
                                                {link.label}
                                            </a>
                                        )
                                    }
                                </Menu.Item>
                            ))
                        }
                    </Menu.Items>
                </div>
            }
        </Menu>
    );
}