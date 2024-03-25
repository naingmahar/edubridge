import { useMutation } from "@tanstack/react-query";
import { TBasicOrderRes } from "../../../types/models/IOrderRes";
import { fetchCreateOrder, fetchGetOrder, fetchUpdateOrder, fetchUpdateOrderStatus } from "../../apiClient/Order";
import { ICreateOrder } from "../../../types/models/IOrder";

export const useCreateOrder = () => {
    return useMutation<TBasicOrderRes, Error, ICreateOrder>(fetchCreateOrder);
};

export const useOrders = () => {
    return useMutation(fetchGetOrder);
};

export const useUpdateOrder = () => {
    return useMutation<TBasicOrderRes, Error, {id:number,data:ICreateOrder}>(fetchUpdateOrder);
};

export const useUpdateOrderStatus = () => {
    return useMutation(fetchUpdateOrderStatus);
};