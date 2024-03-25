import { IDefaultState } from "@/RegisterRoutes"
import { ELABELS } from "@/assets/static_string"
import { ProgressContainer } from "@/componets/atoms/Container/ProgressContainer"
import UnderLineInput from "@/componets/atoms/Input/underlineInput"
import { Button } from "@/componets/atoms/button"
import { IconKey } from "@/componets/atoms/icons"
import { registerState } from "@/feature/recoilState"
import { useRecoilState } from "recoil"

export const ContactInfo = ({state,setState}:IDefaultState) => {

    return (
        <ProgressContainer 
            onChangeRoute={(routeIndex)=>setState(current=>{return {...current,...{route:routeIndex}}})}
            currentRoute={state.route} 
            data={state.phone} 
            progress={9}
            title="How can we reach out to you?">
            <UnderLineInput icon={IconKey.phone} className="mb-10" placeholder={"Your Line Or Viber Phone Number"} 
                value={state.phone}
                onChange={(phone:string)=>{
                    setState(current=>{
                        return {...current,...{phone}}
                    })
                }} 
            />

            <UnderLineInput icon={IconKey.email} className="mb-10" placeholder={"Your Email address (Optional)"} 
                value={state.email}
                onChange={(email:string)=>{
                    setState(current=>{
                        return {...current,...{email}}
                    })
                }} 
            />

            <UnderLineInput icon={IconKey.facebook} className="mb-10" placeholder={"Your Facebook or Messenger Link (Optional)"} 
                value={state.messenger}
                onChange={(messenger:string)=>{
                    setState(current=>{
                        return {...current,...{messenger}}
                    })
                }} 
            />

            {/* <div className="form-control w-full pe-40"><Button 
                className="bg-black text-white" 
                onPress={()=>{}}>{ELABELS.submit}</Button></div> */}
        </ProgressContainer>
    )
}