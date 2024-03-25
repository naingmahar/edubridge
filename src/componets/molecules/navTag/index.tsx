import { useRouter } from "next/router";
import { INavTagProps } from "../../../types/componets/iNav"
import { Icon } from "../../atoms/icons"

const NavTag = (props:INavTagProps) => {
    const navigate = useRouter();
    return (
        <li>
            <a className="text-white" onClick={()=>{navigate.push(props.route)}}>
              <Icon icon={props.icon} active={props.active}  />
              {props.label}
            </a>
        </li>
    )
}


export default NavTag