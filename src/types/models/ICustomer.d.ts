import { IDefaultFormat } from "./ILogin"
import { IPagination } from "./IOrderRes"

  
  export interface ICustomer {
    name: string,
    email: string,
    phno: string,
    id?: number,
    delivery_method_id:number
  }
  

export type TCustomer = IDefaultFormat<ICustomer>

export type TAllCustomer = IDefaultFormat<IPagination<ICustomer>>