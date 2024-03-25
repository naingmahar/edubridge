import { IDefaultState } from "@/RegisterRoutes"
import { RowContainer } from "@/componets/atoms/Container/FlexContainer"
import { ProgressContainer } from "@/componets/atoms/Container/ProgressContainer"
import UnderLineInput from "@/componets/atoms/Input/underlineInput"
import { Label } from "@/componets/atoms/typography/typography"
import { LoadingLabel } from "@/componets/molecules/LoadingLabel"
import { writeUserData } from "@/feature/firebase/register"
import moment from "moment"
import { useEffect, useState } from "react"

export const ConfirmScreen = ({state,setState}:IDefaultState) => {

    const [isSuccess,setStatus] = useState<boolean>(false);
    const [isLoading,setLoading] = useState<boolean>(true);
    const [error,setError] = useState("");

    useEffect(()=>{
        writeUserData(state,(error)=>{
            if(error) {
                setError(error) 
                setStatus(false)
            }
            else setStatus(true)
            setLoading(false)
        })
    },[])
    
    return (
        <ProgressContainer 
            onChangeRoute={(routeIndex)=>setState(current=>{return {...current,...{route:routeIndex}}})}
            currentRoute={state.route} 
            data={state.name} 
            progress={9} 
            hideButton
            title="Your registration is ready?">
            <div className="mb-10">
                <LoadingLabel 
                    label="Processing Registertion" 
                    failTitle={"User Registration Failed"}
                    failLabel={"registerState.error?.message"}
                    successDescription="hello world"
                    successLabel={"Succeed User Registration"}
                    isLoading={isLoading}
                    isSuccess={isSuccess}
                    isFailed={!isSuccess}
                />
                <div>
                    {isSuccess&&<Label>We are going to contact you between <b>{moment().add(15,"minute").format("LLL") +" ~ "+ moment().add(75,"minute").format('LT')}</b>. I hope you have a great day. Thank You.</Label>}
                </div>
            </div>

            <p className="my-4 text-sm">Tired of waiting? You can click and contact us here. </p>
            <RowContainer>
            <a target="_blank" href="https://line.me/ti/p/G6LN6jwd2C"><img src="line.png" className="border rounded-lg me-4 shadow-sm" /></a>
            <a target="_blank" href="https://t.me/+959670000246"><img src="telegram.png" className="border rounded-lg me-4  shadow-sm" /></a>
            <a target="_blank" href="viber://chat?number=+66805585492"><img src="viber.png" className="border rounded-lg me-4 shadow-sm" /></a>
            <a target="_blank" href="https://m.me/uetron.nmh"><img src="messenger.png" className="border rounded-lg me-4 shadow-sm" /></a>
            </RowContainer>
           


            {/* <RowContainer className="pt-24 justify-end">
                    {!isSuccess && <Button onPress={()=>{
                        navigate("../register/8")
                    }}>{ELABELS.previousPage}</Button>}
                    {isSuccess && <Button 
                        className="btn-neutral ms-5" 
                        onPress={()=>{navigate("/owner")}}>
                            {ELABELS.viewStore}
                    </Button>}
            </RowContainer> */}
        </ProgressContainer>
    )
}