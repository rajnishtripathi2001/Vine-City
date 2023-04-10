import UserContext from "./UserContext";
import { useState } from "react";

const UserState = ({children}) =>{

    const [content, setContent] = useState({
        "fname":"",
        "lname":"",
        "username":"",
        "email":"",
        "isLoggedIn":false,
    });

    const updateContent = (newData) => {
        setContent(newData);
    };

    
    return(
        <UserContext.Provider value={{content,updateContent}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserState;