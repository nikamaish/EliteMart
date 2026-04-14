import React, { useRef } from 'react'

const QuickActions = () => {
  const fileInputRef = useRef(null)

  const handleUploadClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      console.log('Selected file:', file.name);
    }
  }

  return (
   <section className="flex flex-column align-items-center justify-content-center gap-3" >
    <div className='flex align-items-center justify-content-between w-full px-5 '>
        <h3>What are you looking for?</h3>
        <div className='flex align-items-center gap-2'>
        <h3>Order with prescription.</h3>
        <h3 onClick={handleUploadClick} style={{cursor: 'pointer', color: 'green'}}>Upload Now</h3>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        </div>

    </div>
    <div>
       <h3>search bar</h3>
    </div>
   </section>
  )
}

export default QuickActions
