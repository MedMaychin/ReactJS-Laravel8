import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Student extends Component {

  state = {
    students: [],
    loading: true,
  }

  async componentDidMount() {
    const res = await axios.get('http://127.0.0.1:8000/api/students');


    if (res.data.status === 200) {
      this.setState({
        students: res.data.students,
        loading: false,
      });
    }
  }

  render() {
    var student_HTMLTABLE = "";
    if (this.state.loading) {
      student_HTMLTABLE =
        <tr>
          <td colSpan="5">
            <h2>Loading...</h2>
          </td>
        </tr>;
    } else {
      student_HTMLTABLE = this.state.students.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.class}</td>
            <td>{item.phone}</td>
            <td>
              <Link to={`edit-student/${item.id}}`} className='btn btn-info m-2'>Edit</Link>
              <button className='btn btn-danger' type='button'>Delete</button>
            </td>
            
          </tr>
        );
      });

    }

    return (
      <div className='container '>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-header'>
                <h4>Student Data
                  <Link to={'add-student'} className='btn btn-primary btn-sm float-end'>Add Student</Link>
                </h4>
              </div>
              <div className='card-body'>
                <table className="table table-striped table-bordered table-responsive">
                  <thead className="thead-inverse">
                    <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>ClASS</th>
                      <th>PHONE</th>
                      <th>METHOD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {student_HTMLTABLE}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Student