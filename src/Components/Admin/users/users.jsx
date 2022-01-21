import React from 'react'
import './users.css'
import DataTable from 'react-data-table-component';

function users() {
    
   
    return (
        <div className='usersContainer'>
            <table className="table" id='productTable'>
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Created</th>
                        <th scope="col">Signed In</th>
                        <th scope="col"><p className='handleOpt'>Handle</p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"><p className='tableCol'>1</p></th>
                        <td><p className='tableCol'>Mark</p></td>
                        <td><p className='tableCol'>Otto</p></td>
                        <td><p className='tableCol'>@uts</p></td>
                        <td><p className='tableCol'>Otto</p></td>
                        <td><a className='btn btn-danger'><p className='btnText'>Delete User</p></a></td>
                    </tr>
                    <tr>
                        <th scope="row"><p className='tableCol'>2</p></th>
                        <td><p className='tableCol'>Jacob</p></td>
                        <td><p className='tableCol'>Adidas</p></td>
                        <td><p className='tableCol'>Size</p></td>
                        <td><p className='tableCol'>Otto</p></td>
                        <td><a className='btn btn-danger'><p className='btnText'>Delete User</p></a></td>
                    </tr>
                    <tr>
                        <th scope="row"><p className='tableCol'>3</p></th>
                        <td><p className='tableCol'>User</p></td>
                        <td><p className='tableCol'>Nike</p></td>
                        <td><p className='tableCol'>Large</p></td>
                        <td><p className='tableCol'>Otto</p></td>
                        <td><a className='btn btn-danger'><p className='btnText'>Delete User</p></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default users
