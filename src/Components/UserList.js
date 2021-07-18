import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Components/UserList.css";

function UserList() {
    const [listOfUSer, setListOfUSer] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                setListOfUSer(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <div className="all">
            <div class="backg"></div>
            
            {listOfUSer.map((user, index) => (
                <div key={index} className="userCard">
                    <div className="profileBody">
                        <h3>{user.name}</h3>
                        <span>{user.email}</span> <br />
                        <span>
                            {user.company.catchPhrase}
                        </span>
                        <p>
                            <strong>{user.company.name}</strong>
                        </p>
                        <span>Phone number: {user.phone}</span>
                        <p>
                            Adress: {user.address.street}, {user.address.suite},{" "}
                            {user.address.city}, {user.address.zipcode}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UserList;