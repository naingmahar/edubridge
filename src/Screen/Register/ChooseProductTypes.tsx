
import { createRef, useEffect } from "react"
import { PRODUCT_TYPES } from "../../common/static-data"
import { ProgressContainer } from "@/componets/atoms/Container/ProgressContainer";
import { CheckBoxGroup, TCheckBoxGroupRef } from "@/componets/organisms/CheckedBoxList";
import { registerState } from "@/feature/recoilState";
import { useRecoilState } from "recoil";
import { IDefaultState } from "@/RegisterRoutes";


export const ChooseProductTypes = ({state,setState}:IDefaultState) => {
    const cbgRef = createRef<TCheckBoxGroupRef>();

    useEffect(()=>{
        if(cbgRef && cbgRef.current){
            if(state && state.type){
                cbgRef.current?.setCheckValue(state.type)
            }
        }
    },[])


    return (
        <ProgressContainer 
            currentRoute={state.route}  
            data={state.type} 
            progress={0} 
            title="Which option do you prefer?" 
            onChangeRoute={(routeIndex)=>setState(current=>{return {...current,...{route:routeIndex}}})}
            isFirst>
            <CheckBoxGroup 
                ref={cbgRef}
                className="mb-5"
                cb={(data)=>{
                    console.log({category:data})
                    if(JSON.stringify(data)!== JSON.stringify(state))
                        setState(current=>{
                            return {...current,...{type:data}}
                        })
                }}
                lst={PRODUCT_TYPES}
             />
        </ProgressContainer>
    )
}