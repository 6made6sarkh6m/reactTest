import React from 'react';

export default function Table({people}){
    const createPerson = () => {
        return people.map((item ,index) => {
            return (
                <tr>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.city}</td>
            </tr>
            );
        })
    }
    return(
        <table>
                {createPerson()}
        </table>
    );



}