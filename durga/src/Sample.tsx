import { Button } from "@mui/material";


interface welcome{
  welcome:string
  tittle:string
  phone:string
}

interface SampleProps {
  name: string;
  email:string;
  phone:string;
  skils?:string[]
  data?:welcome
  onClick?:()=>void

 
}

const Sample = (props: SampleProps) => {
  console.log(props)
  return (
    <div>
       {props.name}
       {props.email}
       {props.phone}
       {props.skils?.map((item)=>{
        return(
          <div key={item}>
             {item}
            </div>
        )
       })}
         <div>
          {props.data?.welcome}
         </div>
         <Button onClick={props.onClick}> this is the durga</Button>
    </div>
  )
}

export default Sample