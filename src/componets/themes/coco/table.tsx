import { MobileColumnContainer, RowContainer } from "../../atoms/Container/FlexContainer"
import { BasicTableBody, BasicTableBodyType } from "../../molecules/table/tBody"
import CheckTableHeader from "../../molecules/table/theader"
import { BrowserView } from "react-device-detect"
import { NoDataFoundTable } from "../Lotties/LottieView"

interface ICoCoTableProps<T> {
    header:string[],
    headerStaus:boolean,
    data:T[],
    className?:string,
    types: BasicTableBodyType<T>,
    mobileUiPlugin:(payload:T)=>React.ReactNode|React.ReactNode[]
}

function CoCoTable<T>(props:ICoCoTableProps<T>){
    if(!props.data || !props.data.length){
        return(
            <RowContainer className="w-full mt-16 lg:mt-24 justify-center items-center">
                <NoDataFoundTable className="w-96 h-auto" />
            </RowContainer>
        )
    }
    return (
        <div className={`${props.className} lg:shadow-sm w-full lg:border-2 rounded-lg`}>
            <BrowserView>
                <table className="table">
                    <CheckTableHeader headers={props.header} status={props.headerStaus} statusOnChange={() => { }} />
                    <BasicTableBody types={props.types} data={props.data} />
                </table>
            </BrowserView>
            <MobileColumnContainer className="">
                {props.data.map((row) => props.mobileUiPlugin(row))}
            </MobileColumnContainer>
        </div>
    )
}


export default CoCoTable