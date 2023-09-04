import React from "react";

import Button from "../Ui/Button/Button";

import Input from "../Ui/Input/Input";

import { createAdmin, createManager } from "../../api/api";

import UserCreateElements from "./UserCreateElements";

const Users = () => {

    const [adminEmail, setAdminEmail] = React.useState('');
    
    const [adminPassword, setAdminPassword] = React.useState('');

    const [managerEmail, setManagerEmail] = React.useState('');
    
    const [managerPassword, setManagerPassword] = React.useState('');
    

    return (
        <>
            <UserCreateElements.Wrapper>
                <UserCreateElements.CreateContainer>
                    <h1>Create admin</h1>
                    <UserCreateElements.Inputs>
                        <Input title="Email*" value={adminEmail} onChange={(ev) => setAdminEmail(ev.target.value)} />
                        <Input title="Password*" value={adminPassword} onChange={(ev) => setAdminPassword(ev.target.value)} />
                    </UserCreateElements.Inputs>
                    <Button onClick={async (ev) => {
                        
                        ev.preventDefault();
                        
                        const response = await createAdmin(adminEmail, adminPassword);

                        console.log(response);
                    
                    }}>Create</Button>
                </UserCreateElements.CreateContainer>

                <UserCreateElements.CreateContainer>
                    <h1>Create manager</h1>
                    <UserCreateElements.Inputs>
                        <Input title="Email*" value={managerEmail} onChange={(ev) => setManagerEmail(ev.target.value)} />
                        <Input title="Password*" value={managerPassword} onChange={(ev) => setManagerPassword(ev.target.value)} />
                    </UserCreateElements.Inputs>
                    <Button onClick={async (ev) => {
                        
                        ev.preventDefault();
                        
                        const response = await createManager(managerEmail, managerPassword);

                        console.log(response);
                    
                    }}>Create</Button>
                </UserCreateElements.CreateContainer>
            </UserCreateElements.Wrapper>
        </>
    );
}

export default Users;
