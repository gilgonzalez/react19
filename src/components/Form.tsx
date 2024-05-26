import { useRef } from 'react';

const Form = () => {

  //* Asi se hacía antes 
  // const inputRef = useRef<HTMLInputElement>()
  // const focusInput = ()=> {
  //   if(inputRef.current) inputRef.current.focus()
  // }
  return (
    <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css" />
      <form action="">
        <input type="text" ref={inputRef}/>
      </form>
        <button onClick={focusInput}>Submit</button>
    </div>
  )
}

export default Form