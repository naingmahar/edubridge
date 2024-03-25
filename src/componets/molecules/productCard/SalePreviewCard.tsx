import { FC } from "react"
import {  ColumnContainer,  RowContainer } from "../../atoms/Container/FlexContainer"
import { InfoHeader, Label } from "../../atoms/typography/typography"
export interface ISalePreviewCard{
    name:string,
    description:string,
    img:string,
    price:string,
    qty:number,
}
export const SalePreviewCard:FC<ISalePreviewCard> = (props) => {
    return(
        <>
            <RowContainer className="justify-between shadow-md p-2 my-3">
                <div className="w-28 me-4 bg-white"><img src={props.img} alt={props.name} /></div>
                <RowContainer className="items-center pe-5">
                    <ColumnContainer className="justify-center">
                        <InfoHeader>{props.name}</InfoHeader>
                        <Label>{props.description}</Label>
                        <Label className="font-bold">{"$ " + props.price}</Label>
                    </ColumnContainer>
                </RowContainer>
            </RowContainer>
            {/* <MobileRowContainer className="justify-between shadow-md p-2 my-3">
                <div className="w-28 me-4"><img src={props.img} alt={props.name} className="max-w-full h-auto rounded-lg" /></div>
                <ColumnContainer className="justify-center">
                    <RowContainer className="justify-between items-center">
                        <InfoHeader className="text-sm font-semibold">{props.name}</InfoHeader>
                        <div className="ms-10">
                            <ColumnContainer className="justify-center items-center h-full">
                                <IconButton label={ELABELS.empty} onPress={()=>{props.onDelete(props.currentIndex)}} icon={IconKey.delete} className="btn-ghost" iconClass="text-red-500" />
                            </ColumnContainer>
                        </div>
                    </RowContainer>
                    <SmLabel>{props.description}</SmLabel>
                    <div>
                        <RowContainer className="justify-between items-center">
                            <Label className="text-sm font-semibold">{"$ "+props.price}</Label>
                            <div className="">
                                <QuantityController isHideLabel onChange={(qty)=>{props.onQtyChange(qty,props.currentIndex)}} stock={props.stock} />
                            </div>
                        </RowContainer>
                    </div>
                </ColumnContainer>
            </MobileRowContainer> */}
        </>
    )
} 