<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TasksController extends Controller
{

    public function index()
    {
        return \App\Task::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return \App\Task::create($request->all());
    }


    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        $task = \App\Task::findOrFail($id);

        $task->name = $request->name;
        $task->value = $request->value;
        $task->date_launch = $request->date_launch;
        $task->save();


        return json_encode($task);
    }


    public function destroy($id)
    {
        $task = \App\Task::findOrFail($id);

        $task->delete();

        return 'task deletada';
    }
}
