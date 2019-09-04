import React from 'react'
import IosCheckmarkCircleOutline from 'react-ionicons/lib/IosCheckmarkCircleOutline'
import IosInformationCircle from 'react-ionicons/lib/IosInformationCircle'

const MessageModal = ({ message, deleteType, onSubmit, onCancel }) =>

  <div className="messageModal">
    <div className="messageModal-inner">
      { deleteType ?
        <IosInformationCircle fontSize="70px" color="#FF595F" />
        : <IosCheckmarkCircleOutline fontSize="70px" color="#00B494" />
      }
      <div>{message}</div>
      { deleteType &&
        <div className="buttons-wrapper">
          <button className="button danger" onClick={() => onSubmit()}>Delete</button>
          <button className="button cancel" onClick={() => onCancel()}>Cancel</button>
        </div>
      }
    </div>
  </div>

export default MessageModal
