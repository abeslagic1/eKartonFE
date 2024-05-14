import { Avatar } from "@mui/material";
import StatusRow from "./statusRow";
import { useEffect, useState } from "react";
import { getRequests } from "../api/requests/requestsAPI";
const WidgetLG = () => {
    const [data, setData] = useState(null); // create state variable

    useEffect(() => {
        getRequests({}) // pass your options here
            .then(response => {
                console.log(response)
                setData(response.data.data); // store data in state variable
            })
            .catch(error => console.error(error));
    }, []); // empty dependency array to run only once on mount

    return (
        <div className="shadow-lg p-6">
            <h3 className="font-bold text-xl mb-4">Change Requests</h3>
            <table className="table-fixed w-full text-center border-separate border-spacing-y-3 ">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    { data && data.map((item) => (
                        <StatusRow
                            key={ item.id }
                            id={ item.id }
                            avatarSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            name={ item.korisnik.username }
                            date={ new Date(item.kreirano).toLocaleDateString() }
                            task={ item.opis }
                            initialStatus={ item.status }
                        />
                    )) }
                    {/* <StatusRow
                        avatarSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        name="Susan Carol"
                        date="2 jun 2022"
                        task="Prihvatiti zahtjev"
                        initialStatus="Accepted"
                    />
                    <StatusRow
                        avatarSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        name="Susan Carol"
                        date="2 jun 2022"
                        task="Dodati customer support"
                        initialStatus="Pending"
                    />
                    <StatusRow
                        avatarSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        name="Susan Carol"
                        date="2 jun 2022"
                        task="Izmisliti beskorisni zahtjev"
                        initialStatus="Accepted"
                    />
                    <StatusRow
                        avatarSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        name="Susan Carol"
                        date="2 jun 2022"
                        task="Napraviti aplikaciju kako treba"
                        initialStatus="Declined"
                    />
                    <StatusRow
                        avatarSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        name="Susan Carol"
                        date="2 jun 2022"
                        task="Popraviti backend"
                        initialStatus="Pending"
                    /> */}
                </tbody>
            </table>
        </div>
    );
};

export default WidgetLG;
