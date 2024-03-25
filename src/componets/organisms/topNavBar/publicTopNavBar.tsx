import {FC, ReactNode} from 'react'
import { Logo } from '../../atoms/icons/icons'
import { useRouter } from "next/router";


const PublicTopNavBar:FC<{children?: ReactNode}> = (props) =>{
    const navigate = useRouter()
    return(
        <div className="w-screen bg-zinc-800 shadow-sm lg:px-8 py-2 ">
            <div className="navbar flex-1 justify-center">
                <div className="flex flex-auto">
                    <Logo />
                    <a className="btn btn-ghost normal-case text-xl text-white" onClick={()=>navigate.push("/")}>PicoShop</a>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default PublicTopNavBar