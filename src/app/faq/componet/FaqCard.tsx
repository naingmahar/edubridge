export interface IFaqProps {
    imageUrl: string;
    title: string;
    description: string;
    dateTime: string;
  }

export const FaqCard = (props:IFaqProps) =>{
    return(
        <div className="card card-compact bg-base-100 shadow-lg mx-1 my-3">
                <img src={props.imageUrl} alt={props.title} className="w-full h-auto" />
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p>{props.description}</p>
                </div>
        </div>
    )
}