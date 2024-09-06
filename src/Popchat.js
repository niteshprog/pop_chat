import React, { useState } from 'react'
import './Popchat.css'
//import the css here

export const PopChat = ( props ) => {
  let hide = {
    display: 'none',
  }
  let show = {
    display: 'block'
  }

  const [chatopen, setChatopen] = useState(false)
  const toggle = e => {
    setChatopen(!chatopen)
  }

  return (
    <div id='chatCon'>
      <div class="chat-box" style={chatopen ? show : hide}>
      <iframe src="" frameborder="0"></iframe>
  </div>
    <div class="pop">
      <p><img onClick={toggle} src="https://p7.hiclipart.com/preview/151/758/442/iphone-imessage-messages-logo-computer-icons-message.jpg" alt="" /></p>
    </div>
    </div>
  )
}

export default PopChat