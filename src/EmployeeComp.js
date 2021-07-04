import React from 'react';
import FormEmp from './FormEmp';
import ListEmp from './ListEmp';

class EmployeeComp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            employees:[]
        };
    }

    add = (employee) => {
        const employees = this.state.employees;
        employees.push(employee);
        this.setState({employees: employees});
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <FormEmp add={this.add}></FormEmp>
                    </div>
                    <div>
                        <ListEmp employees={this.state.employees}></ListEmp>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeeComp;

