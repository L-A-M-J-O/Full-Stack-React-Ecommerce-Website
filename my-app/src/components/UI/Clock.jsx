import React from 'react'

export const Clock = () => {
  return (
    <div className='clock__wrapper d-flex aling-items-center gap-5'>
        <div className='clock__data'>
            <div>
                <h1>10</h1>
                <h5>Days</h5>
            </div>
            <span>:</span>
        </div>
    </div>
  )
}
