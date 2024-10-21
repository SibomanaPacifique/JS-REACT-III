 
 import { useState } from "react"
import people from './Person'
 
 const Overview = () => {
    const [index, setIndex] = useState(0);
    const{name, age, job, image, description} = people[index];
    

    const CheckNumber = function(number){
        if(number> people.length-1){
            return 0;
        }
        else if(number<0){
            return people.length-1;
        }
        return number;
    }
     
    const handleClicka = function(){
        setIndex((index) => {
            let newIndex = index +=1;
            return CheckNumber(newIndex);
            
        });
         
    }
     
    const handleClickb = function(){
        setIndex((index) => {
            let newIndex = index -=1;
            return CheckNumber(newIndex);
        }); 
    }
   return (
   
          <div className="container-fluid">
        <div className="title">  
        <h1 className="text-success" id="overview"> PERSONAL OVERVIEU</h1>
        <div className="underline"></div>
        </div>
         <article>
            <div className="container">
                <img className="image" src={image} />
                <p className="text-primary">Name: {name}</p>
                 <p className="text-success fw-bold">Age: {age}</p>
                 <p className="text-warning">Job: {job}</p>
                 <p className="text-darck fw-bold">Description: {description}</p>
                  
                 <button onClick={handleClickb} className="btn btn-primary">Previous</button>
                 <button onClick={handleClicka} className="btn btn-primary" id="btn2">Next</button>
                 
            </div>
          </article>
     </div>
   )
 }
 
 export default Overview
 