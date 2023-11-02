import React,{useState} from 'react'
import JobApplicationFormModal from '../ModalComponent/JobApplicationFormModal'

export default function ApplyBtn() {


    const [openmodal ,setOpenModal] = useState(false)


    const openComponent =()=>{
        setOpenModal(!openmodal)
    }
  return (
    <div>
        <div onClick={openComponent}>
        <button>Apply</button>
        </div>
        {openmodal && <JobApplicationFormModal/>}
    </div>
  )
}
