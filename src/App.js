import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {
 NavBar,
 ActionCard,
} from './ui-components';

function getTemplates(input1, input2, input3) {
  const url = "https://hyijso7cij.execute-api.us-east-1.amazonaws.com/default/getTemplates";

  const payload = [
    input1,
    input2,
    input3
  ];

  const headers = {
    "Content-Type": "application/json"
  };

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        resolve(data["templates"]);
      })
      .catch(error => reject(error));
  });
}

function App() {
  const [replaceImage, setReplaceImage] = useState(false);

  useEffect(() => {
  const updateImage = () => {
    if (replaceImage) {
      for(let i = 0; i <= 7; i += 2){
        getTemplates("dogs", "dark", "dog riding bicycle")
          .then(templates => {
            const images = document.getElementsByClassName("amplify-image")
            for(let j = 0; j < 2; j++){
              const image = images[i+j+1];
              const container = document.createElement('container');
              container.classList.add('template-box');
              const html = document.createElement('div');
              html.classList.add('template');
              var iframe = document.createElement('iframe');
              iframe.srcdoc = templates[j]["html"];
              var iframeWrapper = document.createElement('div');
              iframeWrapper.appendChild(iframe);
              html.innerHTML = iframeWrapper.innerHTML;
              container.appendChild(html);
              image.parentNode.replaceChild(container, image);

              // Add button action

              const buttons = document.getElementsByClassName('amplify-button amplify-field-group__control amplify-button--primary amplify-button--large');
              const firstButton = buttons[i+j];
              firstButton.addEventListener('click', function() {
                const htmlContent = templates[j]["html"];
                const fileBlob = new Blob([htmlContent], { type: 'text/html' });
                const fileUrl = URL.createObjectURL(fileBlob);
                const downloadLink = document.createElement('a');
                downloadLink.href = fileUrl;
                downloadLink.download = 'page.html';
                downloadLink.style.display = 'none';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                URL.revokeObjectURL(fileUrl);
                });
            }
          })
          .catch(error => console.error(error));
      }
    }
  };
  updateImage();
}, [replaceImage]);

  return (
    <>
      <NavBar />
      <form onSubmit={(e) => {e.preventDefault(); setReplaceImage(true)}}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" /><br/>
            <button type="submit">Submit</button>
      </form>
      <div class="grid-container">
        <div class="grid-item">
          <ActionCard> 
          </ActionCard>
        </div>
        <div class="grid-item"><ActionCard /></div>
        <div class="grid-item"><ActionCard /></div>
        <div class="grid-item"><ActionCard /></div>
        <div class="grid-item"><ActionCard /></div>
        <div class="grid-item"><ActionCard /></div>
        <div class="grid-item"><ActionCard /></div>
        <div class="grid-item"><ActionCard /></div>
        <div class="grid-item"><ActionCard /></div>
      </div>
    </>
  );
}

export default App;
