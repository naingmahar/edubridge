import { IInput } from "../../../types/componets/iInput"
import { Icon } from "../icons"


const UnderLineInput = (props:IInput) => {
    return(
        <div className={`form-control w-full border-b border-zinc-600 py-2 ${props.className}`}>
           <div className="flex flex-1 w-full">
            {props.icon && <Icon icon={props.icon} className="text-black" />}
                <input 
                    value={props.value} 
                    onKeyDown={
                        (e)=>{
                            if(props.onKeydown) props.onKeydown(e)
                        }
                    }
                onChange={(e)=>props.onChange(e.target.value)} type={props.type || "text"} placeholder={`${props.placeholder}`} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
           </div>
        </div>
    )
}




export default UnderLineInput