import { ICheckProps } from "@/componets/organisms/CheckedBoxList";
import { atom, selector } from "recoil";


export interface IRegister{
  type?:ICheckProps,
  name:string,
  route:number,
  phone:string,
  email?:string,
  messenger?:string
}

const registerState = atom<IRegister>({
  key: "ShopAndProduct",
  default: {
    type: undefined,
    name:"",
    route:0,
    phone:"",
    email:"",
    messenger:""
  }
});




export { registerState }


