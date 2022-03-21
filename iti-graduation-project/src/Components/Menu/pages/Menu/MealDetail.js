import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function MealDetails(){
    const params = useParams([])
    const [Menu, setMenu] = useState({})

     
    useEffect(()=>{
        axios.get(`http://localhost:4000/foods/${params.id}`)
        .then((res)=>{
            console.log(res.data)
            setMenu(res.data)

        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

   
    return(
        
        <>
        <h1 style={{color:'#47B07F'}} className='m-5 p-2'> Meal Details</h1>
        <div className='details'>
            <div className='nameImg'>
                <p className='mealName fs-3'> {Menu.name}</p>
                <div className='myim'>
                    <img src={Menu.image}/>
                </div>
            </div>
            <div className='nameImg' style={{height:"fitContent "}}>
                <div className='mealName fs-2'> Recipe Informations</div>
                <ul style={{marginLeft:"5%"}}>
                {
                    Menu['Recipeinfo'] && 
                        
                        <div>
                        {Object.keys(Menu['Recipeinfo']).map(key => (
                            <li key={Math.random()} className='fs-5 m-1' > {key}  : {Menu['Recipeinfo'][key]} </li>
                        ))}
                        </div>
                    }
                </ul>

                <div >
            <h3 className='mealName fs-2'> Nutrition Informations</h3>
            <ul style={{marginLeft:"5%"}}>
            {
                    Menu['NutritionInfo'] && 
                        
                        <div>
                        {Object.keys(Menu['NutritionInfo']).map(key => (
                            <li key={Math.random()} className='fs-5 m-1'> {key}  : {Menu['NutritionInfo'][key]} </li>
                        ))}
                        </div>
                        
                    }

            </ul>
            </div>


            </div>
            <div className='nameImg' style={{height:"fitContent " , margin:"10% 2% " , width:"189% " , padding:"5%"}} >

                    <div className='mealName fs-2'> Meal Details</div>
                <div className='fs-4'style={{marginLeft:"5%"}} > {Menu.details}</div>
                    

            </div>

        </div>

        {/* <div className='details'>
            <div className='nameImg' >
                <div className='tit'>
                        <p className='fs-2'> {Menu.name}</p>
                </div>
                <div className='myimg'>
                <img width={"80%"} src={Menu.image}/>
                </div>
               
            </div>

            <div >
                <div>
                    <h3 className='tit'> Details: </h3>
                    <div className='fs-4 m-2'> {Menu.details}</div>
                </div>
                <div>
                    <h3 className='tit'> Recipe Informations</h3>

                    {
                    Menu['Recipeinfo'] && 
                        
                        <div>
                        {Object.keys(Menu['Recipeinfo']).map(key => (
                            <div key={Math.random()} className='fs-4 m-2'> {key}  : {Menu['Recipeinfo'][key]} </div>
                        ))}
                        </div>
                    }

                </div>

            </div>
            <div >
            <h3 className='tit'> Nutrition Informations</h3>

            {
                    Menu['NutritionInfo'] && 
                        
                        <div>
                        {Object.keys(Menu['NutritionInfo']).map(key => (
                            <div key={Math.random()} className='fs-4 m-2'> {key}  : {Menu['NutritionInfo'][key]} </div>
                        ))}
                        </div>
                        
                    }


            </div>

        </div> */}
        </>
        
    )
    

}
export default MealDetails