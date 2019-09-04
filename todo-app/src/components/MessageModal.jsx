import React from 'react'
import IosCheckmarkCircleOutline from 'react-ionicons/lib/IosCheckmarkCircleOutline'
import IosInformationCircle from 'react-ionicons/lib/IosInformationCircle'

const MessageModal = ({ message, deleteType, onSubmit, onCancel }) =>

  <div className="messageModal">
    { deleteType ?
      <IosInformationCircle fontSize="70px" color="#D93025" />
      : <IosCheckmarkCircleOutline fontSize="70px" color="#00B494" />
    }
    <div>{message}</div>
    { deleteType &&
      <div className="buttons-wrapper">
        <button className="button danger" onClick={() => onSubmit()}>Delete</button>
        <button className="button" onClick={() => onCancel()}>Cancel</button>
      </div>
    }
  </div>

export default MessageModal
