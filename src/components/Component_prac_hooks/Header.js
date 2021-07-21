import React from "react";
import { Link } from "react-router-dom";
const style = {
    common: {
        marginRight: '25px'
    }
    ,homeMargin:{
        marginLeft:'25px'
    }

}
export default function Header (params) {
    

    return(
        <div style={{padding:'25px'}}>
            <Link style={{...style.common,...style.homeMargin}} to='/'> Home</Link>
            <Link style={style.common} to='/commentsection'> Commment Section</Link>
            <Link style={style.common} to='/usermanegement'>  User Mangement</Link> 
            

        </div>
    )

}