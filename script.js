'use strict'

const videoElement = document.getElementById("video");
const button = document.getElementById('button');
const buttonChose = document.getElementById('choose');


//Prompt to seelct media stream, pass to video element

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject= mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
        button.hidden = false;   

    }catch(error){
        //
        console.log('whoops. error here:',error);
    }    
}

button.addEventListener('click',async ()=>{
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});


buttonChose.addEventListener('click', selectMediaStream);

