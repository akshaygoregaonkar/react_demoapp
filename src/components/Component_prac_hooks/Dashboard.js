import React,{useEffect,useState} from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CommentSection from "./CommentSection";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import UserManegement from "./UserMangement";
import axios from 'axios'
import EditUser from './EditUser'
import DataProvider from './ContexApi/DataContex'


export default function Dashboard() {
    //     const [data,setData]=useState([])
    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setData(res.data)) 
    //          },[])

//         var updateData=(Name,Email,address,id)=>{
//             let index=-1
//            data.find((item,ind)=>{
//                if(item.id==id){
//                 index = ind
//                 return true
                   
//                }
//            })
//            setData([...data.slice(0,index),{...data[index],name:Name,email:Email,address:{...address,street:address}},...data.slice(index+1)])
// console.log(data)

//              }

    return (

       
        <div>
        <DataProvider>
          <BrowserRouter>
            <Header />
                <Switch>
                    <Route path='/usermanegement' component={UserManegement}/>
               
                {/* <Route path='/usermanegement' render={(routeProps)=><UserManegement userInfo={data} {...routeProps}/>} /> */}
                    {/* //<Route path='/usermanegement' component={UserManegement} /> */}
                    <Route path='/commentsection' component={CommentSection} />
                    {/* <Route path='/edituser/:userID' render={(routeProps)=><EditUser userInfo={data} {...routeProps} updateData={updateData}/>}/> */}
                    <Route path path='/edituser/:userID' component={EditUser} />
                    <Route path='/' component={Home}/>
                   
                </Switch>
                <Footer />
            </BrowserRouter>
            </DataProvider>
            
        </div>
    )

}