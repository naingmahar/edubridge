import { useRouter } from "next/router";
import { INavTagProps } from "../../../types/componets/iNav"
import { Icon } from "../../atoms/icons"

const BottomNavTag = (props:INavTagProps) => {
    const navigate = useRouter();
    return (
        <button onClick={()=>navigate.push(props.route)}>
              <Icon icon={props.icon} active={props.active}  />
              <span className="btm-nav-label">{props.label}</span>
        </button>
    )
}


export default BottomNavTag