import { Avatar } from "@mui/material";
import StatusRow from "./statusRow";
const WidgetLG = () => {
    return (
        <div className="shadow-lg p-6">
            <h3 className="font-bold text-xl mb-4">Upcoming Consultations</h3>
            <table className="table-fixed w-full text-center border-separate border-spacing-y-3 ">
                <thead>
                    <tr>
                        <th>Patient</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <StatusRow
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
                    />
                </tbody>
            </table>
        </div>
    );
};

export default WidgetLG;
