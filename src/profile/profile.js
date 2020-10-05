import React from "react";
import developpeur from "../images/developpeur.jpg";
import propTypes from "prop-types";

const Profile=({firstName="foulan", lastName="ben foulen", profession="developpeur",
children=developpeur,handleName})=>{
    const styleName={color:"grey",
                    fontStyle:"italic",
                    
                   };
    const styleImage={ width:"300px",
                      }
    const stylecont={display:"flex"}
 


    return (
        <div style={stylecont}>
            <img style={styleImage} src={children} alt="webdev"/>
            <div>
            <h1 style={styleName}> FirstName : {firstName}</h1>
            <h1 style={styleName}> lastName : {lastName}</h1>
            <h1 style={styleName}> Profession : {profession}</h1>
            <button onClick={()=>handleName(firstName)}> cliquer ici </button>
            </div>
            
           
          
        </div>
   
    
    );
   

    
}
Profile.propTypes={
    firstName:propTypes.string,
    lastName:propTypes.string,
    profession:propTypes.string,
    handleName:propTypes.func

        
    }




export default Profile;