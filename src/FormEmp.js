import React from 'react';

class FormEmp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            phone : '',
            email : '',
            birthdate : '',
        }
    }

    updateState = async (name, value) => {
        await this.setState({
            [name]: value
        });
    }

    render(){
        return (
            <div>
                <h2>Input Employee</h2>
                <form>
                    <div>
                        <label>
                            Name
                        </label>
                        <input name="name" onChange={(elem) => {
                            this.updateState('name', elem.target.value)
                        }}>
                        </input>
                    </div>
                    <div>
                        <label>
                            Phone
                        </label>
                        <input name="phone" onChange={(elem) => {
                            this.updateState('phone', elem.target.value)
                        }}>
                        </input>
                    </div>
                    <div>
                        <label>
                            Email
                        </label>
                        <input name="email" onChange={(elem) => {
                            this.updateState('email', elem.target.value)
                        }} class="form-input mt-1 block w-full">
                        </input>
                    </div>
                    <div>
                        <label>
                            Birthdate
                        </label>
                        <input name="name" onChange={(elem) => {
                            this.updateState('birthdate', elem.target.value)
                        }}>
                        </input>
                    </div>
                    <div>
                        <button type="button" onClick={() => {
                            this.props.add({
                                name: this.state.name,
                                phone: this.state.phone,
                                email: this.state.email,
                                birthdate: this.state.birthdate
                            })
                        }} class="px-4 py-2 bg-blue-600 text-white rounded">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormEmp;