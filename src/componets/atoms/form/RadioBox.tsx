
interface IProps {
    status?:boolean,
    onChange:(status:boolean)=>{}
}
export const RadioBox = (props:IProps) => {
    return (
        <input 
            type="radio"  
            className="radio" 
            name="radio-1"
            checked={props.status}
            onChange={e=>{
                props.onChange(e.target.checked)
            }}
        />
    )
}