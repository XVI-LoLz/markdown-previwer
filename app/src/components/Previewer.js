import React from 'react'
import Head from './Head';
import marked, { Renderer } from 'marked'

export default function Previewer( {content}){
  const rawMarkup = (textToConvert) => {
    let rawMarkup = marked(textToConvert, {gfm: true, renderer: new marked.Renderer()})
    return { __html: rawMarkup}
  }
  return(
    <React.Fragment>
      <Head title={'Previewer'}/>
      <div id='preview' dangerouslySetInnerHTML={rawMarkup(content)} />
    </React.Fragment>
  );
}