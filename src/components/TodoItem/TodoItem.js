import React from 'react';
import PropTypes from 'prop-types';
import {Col, Container, Row} from "react-bootstrap";




const TodoStrike = ({todo, myDel, setDone, onShow, color}) => {
    if(!todo.done) {
        return (
            <>
                <Row style={{backgroundColor: color}} className={"todo-row"}>
                    <Col onClick={() => setDone(todo)}>{todo.name}</Col>
                    <Col><button key={todo.id} value={todo} onClick={() => myDel(todo)} className="btn btn-dark" type="button" >Del</button></Col>
                    <Col ><button onClick={() => onShow(todo)} className="btn btn-dark" type="button" >Edit</button></Col>
                </Row>
                <br/>
            </>
        )
    }else{
        return (
            <>
                <Row style={{backgroundColor: color}} className={"todo-row"}>
                    <Col onClick={() => setDone(todo)} style={{textDecoration:"line-through"}}>{todo.name}</Col>
                    <Col><button key={todo.id} value={todo} onClick={() => myDel(todo)} className="btn btn-dark" type="button" >Del</button></Col>
                    <Col><button onClick={() => onShow(todo)} className="btn btn-dark" type="button" >Edit</button></Col>
                </Row>
                <br/>
            </>

        )
    }
};


const TodoItem = ({todo, myDel, setDone, onShow, color}) => {
    return (
            <TodoStrike todo={todo} myDel={myDel} setDone={setDone} onShow={onShow} color={color}/>
    )
};


TodoItem.propTypes = {
  todo: PropTypes.object,
  myDel: PropTypes.func,
  setDone: PropTypes.func,
    color: PropTypes.any
};

TodoItem.defaultProps = {};

export default TodoItem;
