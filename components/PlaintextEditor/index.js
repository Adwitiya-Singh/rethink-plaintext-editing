import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import css from './style.css';
import { listFiles } from '../../files';

function PlaintextEditor({ file, write }) {

  const [currText, setText] = useState(null);

  useEffect(() => {
    file.text().then((value)=>{
      setText(value);
    });
  }, []);


  useEffect(() => {
    file.text().then((value)=>{
      setText(value);
    });
  }, [file]);


  let handleTextChange = (event) => {
      setText(event.target.value);

      let updatedFile = new File(
        [
            event.target.value
        ],
        file.name,
        {
          type: file.type,
          lastModified: Date.now()
        }
      );
      //Add changed file to localstorage - adding it this way since a File object cannot be stored as a string - https://stackoverflow.com/a/19198817
     // Just storing file content and lastModified for this reason
    localStorage.setItem(updatedFile.name, JSON.stringify([updatedFile.lastModified, event.target.value]))
    write(updatedFile)
  }

  return (
    <div className={css.editor}>
      <h3>{file.name.substring(1)}</h3>
      <textarea onChange={handleTextChange} className={css.textArea} value={currText?currText:""}/>
    </div>
  );
}

PlaintextEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default PlaintextEditor;
