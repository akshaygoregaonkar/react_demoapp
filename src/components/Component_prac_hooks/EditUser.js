import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContex } from './ContexApi/DataContex'

export default function EditUser(props) {

    // const [tempUser, setTempUser] = useState({})
    // useEffect(() => {
    //     const { userID } = props.match.params
    //     const findUser = props.userInfo.find(item => item.id == userID)
    //     setTempUser({ ...findUser })
    // }, [])

    // var updateInfo = () => {
    //     const { userID } = props.match.params
    //     props.updateData(tempUser.name, tempUser.email, tempUser.address.street, userID)
    //     props.history.push('/usermanegement')
    // }
    const [tempUser, setTempUser] = useState({})
    const DataApp = useContext(DataContex)
    const { data, setData } = DataApp
    const { userID } = props.match.params
    useEffect(() => {
        const findUser = data.find(item => item.id == userID)
        setTempUser({ ...findUser })
    }, [])

    var updateInfo = (name, email, address) => {
        let index = -1
        data.find((item, ind) => {
            if (item.id == userID) {
                index = ind
                return true
            }
        })
        setData([...data.slice(0, index), { ...data[index], name: name, email: email, address: { ...address, street: address } }, ...data.slice(index + 1)])
        props.history.push('/usermanegement')
    }

    return (
        <div>
            {Object.keys(tempUser).length > 0 && <div style={{
                padding: '20px',
                margin: '10px',
                border: ' 2px solid black',
            }}>

                <div> <label> Update Name:</label> <input type='text' value={tempUser.name} onChange={(e) => setTempUser({ ...tempUser, name: e.target.value })} /> </div>
                <div> <label> Update Email:</label> <input type='text' value={tempUser.email} onChange={(e) => setTempUser({ ...tempUser, email: e.target.value })} />  </div>
                <div> <label> Update Address:</label> <input type='text' value={tempUser.address.street} onChange={(e) => setTempUser({ ...tempUser, address: { ...tempUser.address, street: e.target.value } })} />  </div>
                <button onClick={() => updateInfo(tempUser.name, tempUser.email, tempUser.address.street)}> Update</button>

            </div>}

        </div>
    )

}

