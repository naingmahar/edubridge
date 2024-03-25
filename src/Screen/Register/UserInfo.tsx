import { IDefaultState } from "@/RegisterRoutes"
import { ProgressContainer } from "@/componets/atoms/Container/ProgressContainer"
import UnderLineInput from "@/componets/atoms/Input/underlineInput"
import { registerState } from "@/feature/recoilState"
import { useRecoilState } from "recoil"

export const UserInfo = ({state,setState}:IDefaultState) => {

    return (
        <ProgressContainer 
            onChangeRoute={(routeIndex)=>setState(current=>{return {...current,...{route:routeIndex}}})}
            currentRoute={state.route} 
            data={state.name} 
            progress={9} 
            title="What is your name?">
            <UnderLineInput className="mb-10" placeholder={"John Doe"} 
                value={state.name}
                onChange={(name:string)=>{
                    setState(current=>{
                        return {...current,...{name}}
                    })
                }} 
            />
        </ProgressContainer>
    )
}