import React from 'react'
import Privew from '../components/Privew'
import Steps from '../components/Steps'

function Forms() {
  return (
    <div>
      <h1>forms</h1>

<div className='row'>
  <div className='col-3'></div>
  <div className='col-8'>
    <Privew/>
  </div>
  <div className='col-1'></div>
</div>



      <div className='row p-5'>
         <div className='row p-5'>
          <div className='col-6'>
            <Steps/>
            <div className='col-6'>
              <Privew/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forms
