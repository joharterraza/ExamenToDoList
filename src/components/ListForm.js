import React, { useState } from 'react';


function ListForm(props) {
    //state
    const [input, setInput] = useState(props.edit ? props.edit.value  : '');
    //Input on change
    const handleChange = e => {
        setInput(e.target.value);       
    }
    //form submit
    const handleSubmit = e => {
        e.preventDefault();        
        //set an object with id and text attribute when submit
        props.onSubmit({
            id : (Math.random() * 100000),
            text: input
        })
        setInput('');
    }
    return (
        <section >            
            <form onSubmit={handleSubmit} className='form'>
                {props.edit ? (
                    <>
                        <input
                            type='text'
                            placeholder='Actualize la tarea'
                            value={input}
                            name='text' 
                            onChange={handleChange}
                            autoComplete='off'
                            className='inputForm'  
                                            
                        />  
                        <button className='add-update'><img src={require('./assets/icon-disk.svg').default}></img></button>      
                    </>
                ) : (

                    <>
                        <input
                            type='text'
                            placeholder='Escribe una tarea'
                            value={input}
                            name='text' 
                            onChange={handleChange}
                            autoComplete='off'   
                            className='inputForm'            
                        />  
                        <button className='add-update' id='agregar'>Agregar</button>      
                    </>
                )}
                        
            </form>
        </section>

    );
 
}

export default ListForm;
