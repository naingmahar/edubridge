import { FC } from "react"
import { RadioBox } from "../../atoms/form/RadioBox"

interface iProps{
    onChange:(status:boolean)=>any,
    children:String
    currentState?:boolean
}
export const CheckBoxWithRightSideLabel:FC<iProps> = (props) => {
    return (
        <div className="form-control mb-5">
            <label className="flex items-center cursor-pointer">
                <RadioBox status={props.currentState}  onChange={props.onChange} />
                <span className="ps-5 lg:text-xl text-lg">{props.children}</span> 
            </label>
        </div>
    )
}