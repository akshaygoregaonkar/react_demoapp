import React from 'react'

export default function MyCustomComp(props){

        const{userInformation}=props
        return(
           
              <ul>
                  {userInformation.map((item,index)=><li key={index}>{item.name}</li>)}
              </ul>
        )
    
}