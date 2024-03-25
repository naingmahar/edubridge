import { useRecoilValue } from "recoil"
import { CardContainer } from "../../atoms/Container/CardContainer"
import { BasicTableBody, BasicTableBodyType } from "../../molecules/table/tBody"
import CheckTableHeader from "../../molecules/table/theader"
import { ITableDetailsProps, TableDetails } from "./SubComponet/TableDetail"
import { selectedDynamicTableRow } from "../../../feature/recoilState"
import { BrowserRowContainer, ColumnContainer, MobileColumnContainer, RowContainer } from "../../atoms/Container/FlexContainer"
import { MuiPagenation } from "../../../Lib/@mui/pagiantion"
import { NoDataFoundTable } from "../../themes/Lotties/LottieView"


export function Table<T>(props: {
    title: string[]
    data: T[],
    types: BasicTableBodyType<T>,
    detail: (data: T) => ITableDetailsProps
    mobileUiPlugin: (data: T) => JSX.Element,
    pagiantion?: {
        currentPage?: number,
        totalPage: number,
        itemsPerPage?: number,
        onChange:(page:number)=>any
    }
}) {
    const selectedRow = useRecoilValue(selectedDynamicTableRow);

    if(!props.data || !props.data.length){
        return(
            <RowContainer className="w-full h-screen mt-16 lg:mt-32 justify-center items-center">
                <NoDataFoundTable className="w-96 h-auto" />
            </RowContainer>
        )
    }
    return (
        <div className="flex flex-1 flex-col w-full pb-20 lg:my-10">
            <BrowserRowContainer className="w-fu">
                <ColumnContainer>
                    <CardContainer>
                        <table className="table">
                            <CheckTableHeader headers={props.title} status={false} statusOnChange={() => { }} />
                            <BasicTableBody types={props.types} data={props.data || []} />
                        </table>
                    </CardContainer>
                </ColumnContainer>
                {selectedRow &&
                    <TableDetails {...props.detail(selectedRow.data)} />}
            </BrowserRowContainer>
            <MobileColumnContainer className="">
                {props.data.map((row) => props.mobileUiPlugin(row))}
            </MobileColumnContainer>

            {
                        props.pagiantion != undefined &&
                        <RowContainer className="justify-center my-5">
                            <MuiPagenation count={props.pagiantion.totalPage}  current={props.pagiantion.currentPage || 1} onChange={(e,page)=>{
                                console.log(e)
                                props.pagiantion?.onChange(page)}} />
                        </RowContainer>
            }
        </div>
    )
}