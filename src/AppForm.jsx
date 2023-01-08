import React, { useState } from 'react';

export default function AppForm() {
    
    const [form, setForm] = useState({name: '', email: ''});
    const handleChange = (e) => {

        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        const {name ,value} = e.target;
        setForm({...form, [name] : value});

    };
    
    const handleSubmit = (e) => {

        // preventDefault하지 않으면 페이지를 누를때 마다 새로고침이 됩니다.
        e.preventDefault();
        console.log(form);
    }
    
    
    return (
        // name: 속성에 해당하는 값 사용
        // State: { name: xxx, email: xxxx}
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">이름: </label>
            <input type="text" id='name' name='name3' value={form.name} onChange = {handleChange}/>
            <label htmlFor="email">이메일: </label>
            <input type="email" id='email' name='email3' value={form.email} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    );
}

