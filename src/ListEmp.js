import React from 'react';

class ListEmp extends React.Component {

    render() {
        const employees = this.props.employees;
        return (
            <div>
                <h2>List Employee</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Birthdate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees && employees.map((employee, key) => {
                            return (
                                <tr key={key}>
                                    <td>{employee.name}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.birthdate}</td>
                                    <td></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListEmp;