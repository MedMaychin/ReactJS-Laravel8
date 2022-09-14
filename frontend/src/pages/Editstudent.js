import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Editstudent extends Component {


  state = {
    name: '',
    class: '',
    phone: ''
  }


  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async componentDidMount() {
    const stud_id = this.props.match.params.id;

    const res = await axios.get(`http://127.0.0.1:8000/api/edit-student/${stud_id}`);

    if (res.data.status === 200) {
      this.setState({
        name: res.data.student.name,
        class: res.data.student.class,
        phone: res.data.student.phone
      });
    }
  }

  updateStudent = async (e) => {
    e.preventDefault();

    // const res = await axios.post('http://127.0.0.1:8000/api/add-student', this.state);

    // if (res.data.status === 200) {
    //     console.log(res.data.message);
    //     this.setState({
    //         name: '',
    //         class: '',
    //         phone: ''
    //     });
    // }
  }
  render() {
    return (
      <div className='container '>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header'>
                <h4>Edit Student Data
                  <Link to={'/'} className='btn btn-warning btn-sm float-end'>Back</Link>
                </h4>
              </div>
              <div className='card-body'>
                <form onSubmit={this.updateStudent}>

                  <div className="form-group mb-3">
                    <label>Name</label>
                    <input type="text" name="name"
                      className="form-control"
                      placeholder="Student name"
                      onChange={this.handleInput}
                      value={this.state.name}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Class</label>
                    <input type="text" name="class"
                      placeholder="Student Class"
                      className="form-control"
                      value={this.state.class}
                      onChange={this.handleInput} />
                  </div>

                  <div className="form-group mb-3">
                    <label>Phone</label>
                    <input type="text" name="phone"
                      className="form-control"
                      placeholder="Phone"
                      value={this.state.phone}
                      onChange={this.handleInput} />
                  </div>

                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-success">Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Editstudent