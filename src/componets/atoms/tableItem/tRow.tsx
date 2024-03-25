import { useRecoilState } from "recoil"
import { IProduct } from "../../../types/models/IProducts"
// import { selectedDynamicTableRow, selectedTableRow } from "../../../feature/recoilState"
import { BasicTableBodyType } from "../../molecules/table/tBody"
import { Icon, IconKey, IconsSize } from "../icons"
import { NO_IMAGE_URL } from "../../../assets/static_string"

interface IBasicTableRow<T> {
    data: T,
    index: number,
    types: BasicTableBodyType<T>,
}

const ImageColumn = (props: { img: string, alt?: string, className?: string }) => {
    return (
        <td className={`flex items-center space-x-3 ${props.className}`}>
            <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                    <img src={props.img} alt={props.alt} />
                </div>
            </div>
        </td>
    )
}

export const StatusChangeDropDown = (props: { className?: string, label: string, onChange: (status: "confirm"|"reject"|"processing") => any }) => {

    const statusInfoFnc = (label: string = props.label) => {
        if (label == "processing") return {
            text: "Processing",
            bg: "bg-warning",
            icon: IconKey.pending
        }

        if (label == "pending") return {
            text: "Pending",
            bg: "bg-gray",
            icon: IconKey.pending
        }

        if (label == "reject") return {
            text: "Rejected",
            bg: "bg-red-500",
            icon: IconKey.cross
        }

        return {
            text: "Approved",
            bg: "bg-green-500",
            icon: IconKey.success
        }
    }

    let statusInfo = statusInfoFnc()

    if (props.onChange)
        return (
            <td className={`dropdown w-full  ${props.className}`}>
                <label tabIndex={0} className="flex flex-1 justify-between items-center text-xs px-3 py-2 shadow-sm border rounded-xl w-full font-semibold">
                    <Icon icon={statusInfo.icon} size={IconsSize.normal} className={`rounded-full p-1 text-white ${statusInfo.bg}`} />
                    {statusInfo.text}
                    <Icon icon={IconKey.dropDown} size={IconsSize.xs} />
                </label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><div className="flex flex-1" onClick={()=>{props.onChange("processing")}}>
                        <Icon
                            icon={statusInfoFnc("processing").icon}
                            size={IconsSize.normal}
                            className={`rounded-full p-1 text-white ${statusInfoFnc("processing").bg}`} />
                        Processing
                    </div>
                    </li>
                    <li><div className="flex flex-1" onClick={()=>props.onChange("confirm")}>
                        <Icon
                            icon={statusInfoFnc("approved").icon}
                            size={IconsSize.normal}
                            className={`rounded-full p-1 text-white ${statusInfoFnc("approved").bg}`} />
                        Approve
                    </div>
                    </li>
                    <li><div className="flex flex-1" onClick={()=>props.onChange("reject")}>
                        <Icon
                            icon={statusInfoFnc("approved").icon}
                            size={IconsSize.normal}
                            className={`rounded-full p-1 text-white ${statusInfoFnc("rejected").bg}`} />
                        Reject
                    </div></li>
                </ul>
            </td>
        )
}

// export function BasicTableRow<T>(props: IBasicTableRow<T>) {

//     const [selectedRow, setSelectedRow] = useRecoilState(selectedDynamicTableRow)
//     return (
//         <tr>
//             <th>
//                 <label>
//                     <input
//                         type="checkbox"
//                         className="checkbox"
//                         checked={selectedRow?.index == props.index ? true : false}
//                         onChange={e => {
//                             if (e.target.checked) {
//                                 setSelectedRow(props)
//                             } else {
//                                 setSelectedRow(undefined)
//                             }
//                         }} />
//                 </label>
//             </th>
//             {
//                 props.types.map((row,index) => {

//                     console.log("ROW",row)
//                     //@ts-ignore
//                     let rowData = props.data[row.itemKey] 
//                     if(row.customDataFunc) rowData = row.customDataFunc(props.data)
//                     if (row.type == "image") return <ImageColumn className={row.className} img={rowData} alt={row.alt} />
//                     if (row.type == "changeStatus") return <StatusChangeDropDown label={rowData} onChange={(status)=>row.action?.onChange(props.data,status)} />
//                     if (row.type == 'id' )return <td key={index} className={row.className}>{props.index+1}</td>
//                     return <td key={index} className={row.className}>{rowData}</td>
//                 })
//             }
//         </tr>
//     )
// }

// export const CheckTableRow = (props: { data: IProduct, index: number }) => {

//     const [selectedRow, setSelectedRow] = useRecoilState(selectedTableRow)
//     return (
//         <tr>
//             <th>
//                 <label>
//                     <input
//                         type="checkbox"
//                         className="checkbox"
//                         checked={selectedRow?.index == props.index ? true : false}
//                         onChange={e => {
//                             if (e.target.checked) {
//                                 setSelectedRow(props)
//                             } else {
//                                 setSelectedRow(undefined)
//                             }
//                         }} />
//                 </label>
//             </th>
//             <td>
//                 <div className="flex items-center space-x-3">
//                     <div className="avatar">
//                         <div className="mask mask-squircle w-12 h-12">
//                             <img src={`${props.data.imagesUrl.length ? props.data.imagesUrl[0].url:NO_IMAGE_URL} `} alt={props.data.name} />
//                         </div>
//                     </div>
//                 </div>
//             </td>
//             <td className="font-bold">
//                 {props.data.name}
//             </td>
//             <td>
//                 {props.data.price}
//             </td>
//             <td>{props.data.description}</td>
//         </tr>
//     )
// } 