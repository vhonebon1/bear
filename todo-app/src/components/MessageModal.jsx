import React from 'react'
import IosCheckmarkCircleOutline from 'react-ionicons/lib/IosCheckmarkCircleOutline'

const MessageModal = ({ message }) =>

  <div className="messageModal">
    <IosCheckmarkCircleOutline fontSize="70px" color="#00B494" />
    <div>{message}</div>
  </div>

export default MessageModal
