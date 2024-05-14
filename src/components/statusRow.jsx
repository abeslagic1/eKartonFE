import React, { useState } from 'react';
import { Avatar } from "@mui/material";
import { updateRequestStatus } from '../api/requests/requestsAPI'; // import the function

const StatusRow = ({ id, avatarSrc, name, date, task, initialStatus }) => {
    const [status, setStatus] = useState(initialStatus);
    const [showStatusChange, setShowStatusChange] = useState(false);

    const handleStatusChange = (newStatus) => {
        updateRequestStatus(id, newStatus) // send API request
            .then(() => {
                setStatus(newStatus); // update status on success
            })
            .catch(error => console.error(error)); // handle error
        setShowStatusChange(false);
    };

    return (
        <tr>
            <td className="flex gap-2 items-center justify-center">
                <Avatar alt={ name } src={ avatarSrc } />
                <span>{ name }</span>
            </td>
            <td>{ date }</td>
            <td>{ task }</td>
            <td
                className={ `bg-${status === 'APPROVED' ? 'green' : status === 'REJECTED' ? 'red' : 'blue'}-200 text-${status === 'APPROVED' ? 'green' : status === 'REJECTED' ? 'red' : 'blue'}-600 rounded-md` }
                onClick={ () => setShowStatusChange(prev => !prev) }
            >
                { status }
                { showStatusChange && (
                    <div className="status-change-screen" onClick={ (event) => event.stopPropagation() } style={ {
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1000,
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)'
                    } }>
                        <button className="bg-green-200 text-green-600 rounded-md" style={ { marginRight: '20px' } } onClick={ (event) => { event.stopPropagation(); handleStatusChange('APPROVED') } }>APPROVED</button>
                        <button className="bg-red-200 text-reg-600 rounded-md" style={ { marginRight: '20px', marginTop: '20px' } } onClick={ (event) => { event.stopPropagation(); handleStatusChange('REJECTED') } }>REJECTED</button>
                        <button className="bg-blue-200 text-blue-600 rounded-md" style={ { marginRight: '20px', marginTop: '20px' } } onClick={ (event) => { event.stopPropagation(); handleStatusChange('PENDING') } }>PENDING</button>
                    </div>
                ) }
            </td>
        </tr>
    );
};

export default StatusRow;