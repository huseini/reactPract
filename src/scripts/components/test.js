import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import RenderArray from './renderArray';
import id from '../actions/id';

const Test = (props) => {
    
    const state = props.list;

    return (
        <Fragment>
            <h1>Hi from react component</h1>
            Filter : <input onChange={(e) => {console.log(e.target.value === '' );props.dispatch(id(e.target.value))}}/>
            <RenderArray ar={state}/>
        </Fragment>
    )
};

const mapStateToProps = (state) => (
    {
        list : state
    }
)

export default connect(mapStateToProps)(Test);