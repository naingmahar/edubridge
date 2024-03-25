import { FC, ReactNode, useEffect } from "react"
import { useSetRecoilState } from "recoil"
import { shopState } from "../../feature/recoilState"
import { useGetDomainShop } from "../../feature/query/shop/useShop"
import { useRouter } from "next/router";
import { isLogin } from "../../feature/storage/Auth"

interface IProps {
    className?:string,
    children:ReactNode|ReactNode[]
}

export const SubDomainProvider:FC<IProps> = (props) => {
    const navigate = useRouter();
    const setState = useSetRecoilState(shopState)

    let url = window.location.host
    let pureUrl = url.replace("www.","").replace(".com","").replace(".online","")
    let subdomain = pureUrl.split(".")[0] 

    useEffect(()=>{
        console.log("LOGGGER",pureUrl.split(".").length)
        if(pureUrl.split(".").length === 1) {
            if(isLogin()) navigate("/login")
            else navigate("/home")
        }
    },[])

    const domainShop = useGetDomainShop(subdomain);

    useEffect(()=>{
        if(domainShop.data) setState(domainShop.data)
    },[domainShop])

    return(
        <div className={props.className||""}>
            {props.children}
        </div>
    )
}