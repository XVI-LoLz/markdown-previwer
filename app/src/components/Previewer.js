import React from 'react'
import Head from './Head';


export default function Previewer(){
  return(
    <React.Fragment>
      <Head title={'Previewer'}/>
      <div>
        This has to be markdown
      </div>
    </React.Fragment>
  );
}