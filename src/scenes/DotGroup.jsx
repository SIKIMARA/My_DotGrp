import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Menu=["home","skills","projects","pestimonials","conatct"]

export default function DotGroup({SelectedPage,setSelectedPage}) {

     const selectedStyles =`relative bg-yellow before:absolute 
     before:w-6 before:h-6 before:rounded-full before:border-2 
     before:border-yellow before:left-[-50%] before:top-[-50%]`
  return (
    <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
        {
            Menu.map((e)=>
            <AnchorLink
            className={`${SelectedPage===e ? selectedStyles :"bg-slate-500"} 
            w-3 h-3 rounded-full `}
            href={`#${e}`}
            onClick={()=>setSelectedPage(e)}
            />)
        }
         
    </div>
  )
}
