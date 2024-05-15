import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://employee-server-test.onrender.com/users')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        const confirmation = window.confirm("Would you like to delete?");
        if (confirmation) {
            axios.delete(`https://employee-server-test.onrender.com/users/${id}`)
                .then(res => {
                    navigate('/');
                    window.location.reload();
                })
                .catch(err => {
                    console.error("Error deleting user:", err);
                });
        }
    };

    return (
        <div className='d-flex flex-column justify-content-center align-items-center' id='main'>
            <h1 className=' mt-3'>List of Users</h1>
            <div className='w-75 border shadow p-4 rounded' id='home' >
                <div className='d-flex justify-content-end mb-3'><Link to="/create" className='btn btn-success'>Add +</Link></div>
                <table className='table table-striped '>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr key={i} >
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td>
                                    <Link to={`/read/${d.id}`} className='btn btn-info btn-sm me-4'>Read</Link>
                                    <Link to={`/update/${d.id}`} className="btn btn-success btn-sm me-4">Edit</Link>
                                    <button onClick={() => handleDelete(d.id)} className='btn btn-danger btn-sm'>Delete</button>
                                    <Form.Select aria-label="Default select example" className='mt-3' style={{width:"120px"}}>
                                        <option>Status</option>
                                        <option value="1">Active</option>
                                        <option value="2">Inactive</option>
                                    </Form.Select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
