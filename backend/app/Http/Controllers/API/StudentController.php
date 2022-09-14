<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    //
    public function index()
    {
        $students =Student::all();
        return response()->json([
            'status' => 200,
            'students' => $students,
        ]);
    }

    public function store(Request $request)
    {

        $student = new Student;

        $student->name = $request->input('name');
        $student->class = $request->input('class');
        $student->phone = $request->input('phone');
        $student->save(); 


        return response()->json([
            'status' => 200,
            'message' => 'Student Added Successfully',
        ]);
    }


    public function edit($id){

        $student  =   Student::find($id);

        if($student)
        {
            return response()->json([
                'status'=> 200,
                'student' => $student,
            ]);
        }
        else
        {
            return response()->json([
                'status'=> 404,
                'message' => 'No Student ID Found',
            ]);
        }

    }

    
}
