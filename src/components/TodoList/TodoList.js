import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import logo from "../../logo.svg";
import TodoItem from "../TodoItem/TodoItem";
import randomColor from "randomcolor";

const TodoList = (props) => {
    const [newName, setNewName] = useState("");
    const [editName, setEditName] = useState("");
    const [todoListe, setTodoListe] = useState(props.todos)
    const [toEdit, setToEdit] = useState({})
    const [toEditShow, setToEditShow] = useState(false)



    const inputNewTodoName = <input value={newName} class="form-control" onChange={e => setNewName(e.target.value)} type={"text"} />;
    const inputEditTodoName = <input value={editName} onChange={e => setEditName(e.target.value)} type={"text"} />;


    const Modal = ({ handleClose, handleSubmit, children }) => {

        if(toEditShow){
            return (
                <div>
                    <section className="modal-main">
                        {children}
                        <button type={"button"} onClick={handleSubmit} class="btn btn-success">Submit</button>
                            {inputEditTodoName}
                        <button type="button" onClick={handleClose} class="btn btn-danger">
                            Close
                        </button>
                    </section>
                </div>
            );
        }
    };



    const openModal = (item) => {
        setToEditShow(true)
        setEditName(item.name)
        setToEdit(item)
    }


    const onEdit = () => {
        console.log("Save ", toEdit.name)
        let newArr = [...todoListe];
        newArr[newArr.indexOf(toEdit)] = {name: editName, done: toEdit.done, id: toEdit.id};
        setTodoListe(newArr)
        onClose()
    }

    const onSetDone = (item) => {
        let newArr = [...todoListe];
        newArr[newArr.indexOf(item)] = {name: item.name, done: !item.done, id: item.id};
        setTodoListe(newArr)
    }

    const del = (item) => {
        setTodoListe(todoListe.filter(todo => {
            return todo.id !== item.id
        }));
    }

    const [color, setColor] = useState();

    let randomColor = require('randomcolor'); // import the script
    const listItems = todoListe.map((todo) =>  <TodoItem myDel={del} key={todo.id} todo={todo} setDone={onSetDone} onShow={openModal} color={randomColor()}/>);




    const add = () => {
        setTodoListe(todoListe => [...todoListe, {name: newName, done: false, id: todoListe[todoListe.length-1].id + 1}]);
        setNewName("")
    }
    const onClose = () => {
        setToEditShow(false)
    }

    return (
        <div>
            <header className="App-header" >
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                   Whats your todo plan {newName}
                </p>

                <div className="input-group" style={{width: "90%", margin: "10%"}}>
                    {inputNewTodoName}
                    <div className="input-group-append">
                        <button className="btn btn-dark" type="button" onClick={add}>Add Todo</button>
                    </div>
                </div>
                <div style={{width: "90%", marginLeft: "10%", marginRight: "10%"}}>
                    {listItems}
                </div>
                <Modal handleClose={onClose} handleSubmit={onEdit}>
                    <p>Modal</p>
                </Modal>
            </header>
        </div>
    )
};

TodoList.propTypes = {
    todos: PropTypes.array
};

TodoList.defaultProps = {};

export default TodoList;
