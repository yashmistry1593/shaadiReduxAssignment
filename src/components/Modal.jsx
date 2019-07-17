import React from 'react'

const Modal = (props) => {
    let modalDisplay = props.showLog ? 'show-modal' : '';
    return (
        <div id="myModal" className={`${modalDisplay} modal`}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={props.closeModal}>&times;</span>
                    <h2>List of Numbers User selected :</h2>
                </div>
                <div className="modal-body">
                    {props.logValueList.join(',')}
                </div>
            </div>

        </div>
    )
}

export default Modal
