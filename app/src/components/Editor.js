import React from 'react'
import Head from './Head'



export default function Editor({content, updateContent}){
  const [ tempContent, setTempContent ] = React.useState(content)
  
  const handleChange = (event) => {
    setTempContent(event.target.value)
    updateContent(tempContent)
  }
  return(
    <React.Fragment>
      <Head title={'Editor'} />
      <textarea id='editor' value={tempContent} onChange={handleChange} className='editor' />
    </React.Fragment>
  );
}
