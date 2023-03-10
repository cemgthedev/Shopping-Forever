import { Option } from "../Option";

import '../../styles/global.css'

const links = [
    {href:'/singin', label:'Sing In'},
    {href:'/singup', label:'Sing Up'}
]

export function Header({ options }) {
    return (
        <div className="w-screen">
            <header 
                className="bg-black 
                            text-white
                            flex
                            justify-between
                            items-center
                            p-8
                            sticky
                            top-0
                            right-0
                            left-0
                            shadow-md"
            >
                <div className="text-2xl font-bold">Shopping Forever</div>
                <div 
                    className="flex 
                                items-center 
                                justify-center 
                                gap-4"
                >
                    {
                        options.map(option => (
                            <Option key={option.href} option={ option } />
                        ))
                    }
                </div>
                <div 
                    className="flex 
                                items-center 
                                justify-center 
                                gap-4"
                >
                    {
                        links.map(link => (
                            <Option key={link.href} option={ link } />
                        ))
                    }
                </div>
            </header>
            <img 
                src="/banner.jpg" 
                alt="" 
                className="w-screen 
                           h-[200px]
                           shadow-md"
            />
        </div>
    );
}