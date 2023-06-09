import React from 'react'
import "./BlogPage.css"
import {ImCross} from "react-icons/im"

const BlogPage = ({open, name, para, img, onClose}) => {
    const OVERLAY_STYLES = {
        position: "fixed",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
        zIndex: 1000
    }
    const MODAL_STYLES = {
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#FFF",
        padding: "50px",
        zIndex: 1000,
        border: "4px solid var(--orange)",
        width: "50vw",
        height: "23rem",
        overflow: "scroll",
    }
    if(!open) return null
  return (
    <div style={OVERLAY_STYLES} className="modal">
              <span className='blog-icon' onClick={onClose}><ImCross/></span>

      <div style={MODAL_STYLES}>

        <div className="BlogPage">
        <h3>{name}</h3>
        <p>{para}</p>

        </div>
      </div>
    </div>
  )
}

export default BlogPage
