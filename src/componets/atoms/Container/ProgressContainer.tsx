import { FC } from "react"
import { BrowserColumnContainer, ColumnContainer, RowContainer } from "./FlexContainer"
import { Button } from "../button"
import { ELABELS } from "../../../assets/static_string"
import { RegisterRoutes } from "../../../RegisterRoutes"
import { PublicNavBar } from "../../themes/nav"

interface IProps{
    progress:number,
    children:React.ReactNode,
    isFirst?:boolean,
    isSubmit?:boolean,
    onSubmit?:() => {},
    customButton?:JSX.Element,
    hideButton?:boolean,
    title:string,
    data?:any,
    currentRoute:number,
    onChangeRoute:(routeIndex:number)=>any
}
export const ProgressContainer:FC<IProps> = (props) => {

    const pushNextRoute = () => {
        props.onChangeRoute(props.currentRoute+1)
    }

    const pushPreviousRoute = () => {
        props.onChangeRoute(props.currentRoute-1)
    }

    const isDisableButton = () => {
        if(props.data) return false
        return true
    } 

    
    const NextButtom = () =>{
        return (
            <Button 
                disabled={isDisableButton()}
                className="bg-black text-white" 
                onPress={()=>pushNextRoute()}>{ELABELS.next}</Button>
        )
    }

    const BackButtom = () =>{
        return (
            <Button className="me-5" onPress={()=>pushPreviousRoute()}>{ELABELS.back}</Button>
        )
    }

    const SubmitButtom = () =>{
        return (
            <Button onPress={()=>{}}>{ELABELS.back}</Button>
        )
    }


    const ButtonManager = ():JSX.Element => {
        if(props.hideButton) return <></>
        if(props.isFirst) return <NextButtom />
        if(props.isSubmit) return <SubmitButtom />
        if(props.customButton) return props.customButton
        return (<RowContainer className="justify-end"><BackButtom /> <NextButtom /></RowContainer>)
    }

    let progress = (((props.currentRoute+1)/RegisterRoutes.length)*100).toFixed(0)
    return (
        <div className="flex flex-1 flex-col w-screen h-screen">
            {/* <PublicNavBar hideCart hideShop /> */}
            <div className="px-5 mt-32">
                <div className="flex w-full items-center justify-center ">
                    <progress className="progress w-full" value={progress} max="100"></progress>
                    <div className="px-5 font-semibold text-sm">{`${progress}%`}</div>
                </div>
                <RowContainer className="justify-center lg:items-center lg:px-20 lg:py-0 py-10 px-5">
                    <ColumnContainer>
                        <h2 className="lg:text-4xl text-xl font-bold mb-2">{props.title}</h2>
                        <a href="/faq" className="mb-14 ms-2 text-sky-700">အမေးများသောမေးခွန်းများကိုဖတ်လိုပါကဤနေရာကိုနှိပ်ပါ။</a>
                        {props.children}
                        <div className="flex justify-end">
                            <ButtonManager/>
                        </div>
                    </ColumnContainer>
                    <BrowserColumnContainer className="py-20 justify-center items-center ">
                    <img src={RegisterRoutes[props.currentRoute].img} height="auto" width="55%" />
                    </BrowserColumnContainer>
                </RowContainer>
            </div>
        </div>
    )
} 