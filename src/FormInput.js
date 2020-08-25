import React, {useState} from 'react';
import Modal from 'react-modal'



function FormInput() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [firstname, setFirstname] = useState(null)
    const [lastname, setLastname] = useState(null)
    const [address, setAddress] = useState(null)
    const [email, setEmail] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('in function')
        setModalIsOpen(true)
    }
        return ( 
          <div className='container'>
              
            <form className='form form-group' onSubmit={(e)=>{handleSubmit(e)}}>
                <label>FirstName :</label>
                <input type='text' name='firstname' placeholder='FirstName' className='form-control' required onChange={(e)=>setFirstname(e.target.value)}/>
                <label>LirstName :</label>
                <input type='text' name='lirstname' placeholder='LastName' className='form-control' required onChange={(e)=>setLastname( e.target.value)}/>
                <label>Address :</label>
                <input type='text' name='address' placeholder='Address' className='form-control'  required onChange={(e)=>setAddress( e.target.value)}/>
                <label>Email :</label>
                <input type='text' name='email' placeholder='Email' className='form-control' required onChange={(e)=>setEmail( e.target.value)}/>
                <button className='btn btn-primary btn-block p-3 m-1' type="submit">Submit</button>
        </form>
        <Modal isOpen={modalIsOpen}>
           <h1>React Modal</h1>
              <p>FirstName: {firstname}</p>
              <p>LastName: { lastname}</p>
              <p>Address: { address}</p>
              <p>Email: {email}</p>
           <button onClick={()=>setModalIsOpen(false)}>close modal</button>
        </Modal>
        </div> 
        );
    }
    // Modal.setAppElement(FormInput);
 
export default FormInput;

