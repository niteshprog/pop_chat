import React, { useState } from 'react'
import  './Chatbot.css'

function Chatbot() {
    let hide = {
        display: 'none',
    }
    let show = {
        display: 'block',
    }

    const [chatOpen, setChatOpen] = useState(false)
    const toggle = e => {
        setChatOpen(!chatOpen)
    }
  return (
    <div className='chatbot-all'>
      <iframe src="" frameborder="0"></iframe>


      <div class="pop">
        <img onClick={toggle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqI5w4ZCz10xFXjFgAHnTJeVdWgO6UwV_N0GICcOwjoA&s" alt="" />
      </div>
    </div>
  )
}

export default Chatbot
