import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link=({ page,SelectedPage,setSelectedPage})=>{
    const lowerCasePage =page.toLowerCase();
    return(
        <AnchorLink
        className={`${SelectedPage===lowerCasePage ? "text-yellow" :""} hover:text-yellow transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={()=>setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}
const Menu=["Home","Skills","Projects","Testimonials","Conatct"]

export default function NavBar({isTopPage,SelectedPage,setSelectedPage}) {
    const [isMenuToggled,setMenuToggled]=useState(false);
    
    const isAboveSmallScreens= useMediaQuery('(min-width:768px)');
    const MenuBg=isTopPage?'':'bg-amber-500';
  return (
    <nav className={`${MenuBg} z-40 w-full fixed top-0 py-6`}>
        <div className='flex items-center justify-between mx-auto w-5/6'>
            <h4 className='font-poppins text-4xl font-bold'>DB</h4>
            {
                isAboveSmallScreens?(
                    <div className='flex justify-between gap-8 font-poppins text-sm font-semibold'>
                        {
                            Menu.map((e)=>
                            <Link 
                            page={e}
                            SelectedPage={SelectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                            )
                        }
                        
                    </div>
                ):(<button 
                        className='animate-bounce p-2 rounded-lg bg-amber-500'
                        onClick={()=>{setMenuToggled(!isMenuToggled)}}
                    >
                    Menu
                    </button>)
            }
            {!isAboveSmallScreens && isMenuToggled && (
                <div className='h-full bottom-0 right-0 w-[300px] fixed bg-green-500'>
                    <div className='flex justify-end p-10'>
                        <button
                            className='animate-bounce p-2 rounded-lg bg-amber-500'
                            onClick={()=>{setMenuToggled(!isMenuToggled)}}
                        >
                            Close
                        </button>
                    </div>
                    <div className='flex flex-col gap-8 ml-14 text-2xl text-white'>
                        {
                             Menu.map((e)=>
                             <Link 
                             page={e}
                             SelectedPage={SelectedPage}
                             setSelectedPage={setSelectedPage}
                         />
                             )
                        }
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}
