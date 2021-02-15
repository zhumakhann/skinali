import React from 'react'
import firebase from '../../../firebase'
import { connect } from 'react-redux'
import { authTest } from '../../../redux/actions/auth'
const index = (props) => {
    console.log(props);
    return (
        <div>
            Hello from auth
        </div>
    )
}

function mapStateToProps(state){
    return {
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch){
    return{
        authTest: () => dispatch(authTest())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index)

