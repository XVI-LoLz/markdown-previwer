import React from 'react'
import Head from './Head'



export default function Editor(){
  const [ content, setContent ] = React.useState('This is the content')

  console.log(content)

  const handleChange = (event) => {
    setContent(event.target.value)
  }
  return(
    <React.Fragment>
      <Head title={'Editor'} />
      <textarea value={content} onChange={handleChange} className='editor' />
    </React.Fragment>
  );
}