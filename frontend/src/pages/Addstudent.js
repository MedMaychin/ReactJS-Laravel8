import React from 'react';
import {Link} from 'react-router-dom';

function Addstudent() {
    return (
        <div className='container '>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Add Student Data
                                <Link to={'/'} className='btn btn-warning btn-sm float-end'>Back</Link>
                            </h4>
                        </div>
                        <div className='card-body'>
                            <div class="form-group mb-3">
                              <label>Name</label>
                              <input type="text" name="name" value={this.state.name} className="form-control" placeholder="Student name" onChange={this.handleInput}/>
                            </div>
                            <div class="form-group mb-3">
                              <label>Class</label>
                              <input type="text" name="class" value={this.state.class} className="form-control" placeholder="Student Class" onChange={this.handleInput}/>
                            </div>
                            <div class="form-group mb-3">
                              <label>Phone</label>
                              <input type="text" name="phone" value={this.state.phone} className="form-control" placeholder="Phone" onChange={this.handleInput}/>
                            </div>
                            <div class="form-group mb-3">
                                <button type="submit" class="btn btn-success">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addstudent