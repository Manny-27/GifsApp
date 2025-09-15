
interface Props {
    title: string;
    desciption?: string;
}


export const CustomHeader = ({title, desciption}: Props) => {
  return (
    <div className="content-center">
        <h1>{title}</h1>
        {desciption && <p>{desciption}</p>}
    </div>
  )
}
