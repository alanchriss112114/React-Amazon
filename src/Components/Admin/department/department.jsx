import React from 'react'
import './department.css'

function department() {
    return (
        <div>
            <section className='adminDepartmentSection'>
                <button className='btn btn-success departmentAddButton'><i class="fas fa-plus"></i>   Add Department</button>
                <div className="adminDepartmentContainer">
                    <div className="adminDepartment">
                        <p className='departmentTitle'>Electronics</p>
                        <button className='departmentRemoveButton'><i class="fas fa-times-circle"></i></button>
                        <img className='departmentImage' src="https://5.imimg.com/data5/SELLER/Default/2021/8/XH/CD/JH/135581448/whatsapp-image-2021-08-12-at-4-53-03-pm-250x250.jpeg"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default department
