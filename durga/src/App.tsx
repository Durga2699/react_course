
import Sample from './Sample'
import Button from '@mui/material/Button'

const App = () => {

  const hii= ()=>{
    alert('this is the durga ')
  }

  const data = {
    welcome:'hello world',
    tittle:"this is durga",
    phone:"23456789"
  }

const durga = () =>{
  alert("this is the  durga ")
}

  return (
    <div>
      <Sample
       name='durga'
       email='durga@gmail.com'
       phone='1234567'
       
       skils={['html','css','js']}
       data={data}
       />

       {/* <Button onClick={() => alert('hii')}  /> */}

       {/* <Button onClick={hii} > DURGA</Button> */}

       <Button 
          onClick={durga}
        />


  
    
     
    </div>
  )
}

export default App