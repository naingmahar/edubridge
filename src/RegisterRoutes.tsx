import { ReactNode } from "react"
import { ChooseProductTypes } from "./Screen/Register/ChooseProductTypes"
import { UserInfo } from "./Screen/Register/UserInfo"
import { IRegister } from "./feature/recoilState"
import { SetterOrUpdater } from "recoil"
import { ContactInfo } from "./Screen/Register/ContactInfo"
import { ConfirmScreen } from "./Screen/Register/ConfirmScreen"

export interface IDefaultState{
    state:IRegister,
    setState:SetterOrUpdater<IRegister>
}
interface IRoute {
    img:string,
    routeName:string,
    componet:(props:IDefaultState) => ReactNode
}
export let RegisterRoutes:IRoute[] = [
    {img:"chooseOption.png",routeName:"/register/1" ,componet:(props) => <ChooseProductTypes {...props} />},
    {img:"registration.png",routeName:"/register/2" ,componet:(props) => <UserInfo {...props} />},
    {img:"socialmedia.png",routeName:"/register/3" ,componet:(props) => <ContactInfo {...props} />},
    {img:"complete.png",routeName:"/register/4" ,componet:(props) => <ConfirmScreen {...props} />},
    // {routeName:"/register/3" ,componet:UploadProductPhoto},
    // {routeName:"/register/4" ,componet:AddProductPrice},
    // {routeName:"/register/5" ,componet:AddProductStockQuantity},
    // {routeName:"/register/6" ,componet:ChooseDelivaryTypes},
    // {routeName:"/register/7" ,componet:ConfirmProduct},
    // {routeName:"/register/8" ,componet:ShopName},
    // {routeName:"/register/9",componet:UploadShopImage},
    // {routeName:"/register/10" ,componet:ShopEmail},
    // {routeName:"/register/11",componet:ShopAdminPassword},
    // {routeName:"/register/12",componet:ShopPhone},
    // {routeName:"/register/13",componet:ShopDomainName},
    // {routeName:"/register/14",componet:ShopConfirm}
]







