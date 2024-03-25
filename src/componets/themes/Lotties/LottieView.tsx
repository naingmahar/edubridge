import Lottie from "lottie-react";
import shopLoaderLottie from "./animation/shop_loader_lottie.json";
import noDataLottie from "./animation/nodata.json";
import noDataTableLottie from "./animation/nodatatable.json";
import { FC } from "react";

interface IProps {
    className?:string
    isLoading?:boolean
}
export const ShopLoader:FC<IProps> = (props) => {
    if(props.isLoading) return <div />
    return <Lottie className={props.className} animationData={shopLoaderLottie} loop={true} />
}

export const NoDataFoundLottie:FC<IProps> = (props) => {
    if(props.isLoading) return <div />
    return <Lottie className={props.className} animationData={noDataLottie} loop={true} />
}

export const NoDataFoundTable:FC<IProps> = (props) => {
    if(props.isLoading) return <div />
    return <Lottie className={props.className} animationData={noDataTableLottie} loop={true} />
}