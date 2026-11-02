"use client";
import { KeyboardEvent, PointerEvent, useEffect, useRef, useState } from "react";

export default function Portrait() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const print = useRef<HTMLImageElement | null>(null);
  const previous = useRef<{x:number;y:number}|null>(null);
  const resetButton = useRef<HTMLButtonElement>(null);
  const keyboardReveal = useRef(false);
  const [ready,setReady] = useState(false);
  const [photo,setPhoto] = useState(false);
  const [revealed,setRevealed] = useState(0);

  useEffect(()=>{
    let mounted=true;
    const image=new window.Image();
    image.onload=()=>{
      if(!mounted)return;
      print.current=image;
      const context=canvas.current?.getContext("2d",{willReadFrequently:true});
      if(!context)return;
      context.fillStyle="#171c22";
      context.fillRect(0,0,600,600);
      context.drawImage(image,0,0,600,600);
      setReady(true);
    };
    image.src="/art/sandesh-blue.webp";
    return ()=>{mounted=false;};
  },[]);

  useEffect(()=>{
    if(photo&&keyboardReveal.current){
      resetButton.current?.focus();
      keyboardReveal.current=false;
    }
  },[photo]);

  function reset(){
    const context=canvas.current?.getContext("2d");
    if(!context||!print.current)return;
    context.globalCompositeOperation="source-over";
    context.clearRect(0,0,600,600);
    context.fillStyle="#171c22";
    context.fillRect(0,0,600,600);
    context.drawImage(print.current,0,0,600,600);
    previous.current=null;
    setPhoto(false);
    setRevealed(0);
  }

  function complete(){
    canvas.current?.getContext("2d")?.clearRect(0,0,600,600);
    previous.current=null;
    setPhoto(true);
    setRevealed(100);
  }

  function checkCoverage(){
    const context=canvas.current?.getContext("2d");
    if(!context)return;
    const pixels=context.getImageData(0,0,600,600).data;
    let remaining=0;
    let sampled=0;
    // Clear the last tiny print specks once the surface is effectively rubbed off.
    for(let y=6;y<600;y+=12)for(let x=6;x<600;x+=12){
      sampled++;
      if(pixels[(y*600+x)*4+3]>12)remaining++;
    }
    setRevealed(Math.round((1-remaining/sampled)*100));
    if(remaining/sampled<=0.08)complete();
  }

  function erase(event:PointerEvent<HTMLCanvasElement>){
    const context=event.currentTarget.getContext("2d");
    if(!context||photo)return;
    const rect=event.currentTarget.getBoundingClientRect();
    const point={x:(event.clientX-rect.left)*600/rect.width,y:(event.clientY-rect.top)*600/rect.height};
    context.globalCompositeOperation="destination-out";
    context.lineWidth=94;
    context.lineCap="round";
    context.beginPath();
    context.moveTo(previous.current?.x??point.x,previous.current?.y??point.y);
    context.lineTo(point.x,point.y);
    context.stroke();
    context.beginPath();
    context.arc(point.x,point.y,47,0,Math.PI*2);
    context.fill();
    previous.current=point;
  }

  function start(event:PointerEvent<HTMLCanvasElement>){
    if(!ready||photo||(event.pointerType==="mouse"&&event.button!==0))return;
    event.currentTarget.setPointerCapture(event.pointerId);
    previous.current=null;
    erase(event);
  }

  function end(event:PointerEvent<HTMLCanvasElement>){
    previous.current=null;
    if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);
    if(ready&&!photo)checkCoverage();
  }

  function keyboard(event:KeyboardEvent<HTMLCanvasElement>){
    if(ready&&!photo&&(event.key==="Enter"||event.key===" ")){
      event.preventDefault();
      keyboardReveal.current=true;
      complete();
    }
  }

  return <div className="portrait-composition">
    <div className="print-stage">
      <div className={`scratch-portrait direct-rub ${photo?"is-photo":""}`} role="group" aria-label={photo?"Sandesh's original photograph":`Sandesh's printed portrait. ${revealed}% revealed.`}>
        <img className="portrait-original" src="/sandesh.jpg" alt="" width="600" height="600"/>
        <img className={`portrait-print-fallback ${ready||photo?"canvas-ready":""}`} src="/art/sandesh-blue.webp" alt="" width="600" height="600" fetchPriority="high"/>
        <canvas ref={canvas} width="600" height="600" role="button" tabIndex={photo?-1:0} aria-disabled={!ready} aria-label="Rub the portrait to reveal the photograph. Keyboard: press Enter or Space."
          style={{visibility:photo?"hidden":undefined}} onPointerDown={start}
          onPointerMove={event=>{if(event.currentTarget.hasPointerCapture(event.pointerId))erase(event);}}
          onPointerUp={end} onPointerCancel={end} onKeyDown={keyboard}/>
      </div>
      {!photo&&<><span className="print-note" aria-hidden="true">try rubbing this.</span><svg className="print-note-arrow" viewBox="0 0 90 65" fill="none" aria-hidden="true"><path d="M85 6C58 1 70 49 12 45m13-9L9 46l20 8"/></svg></>}
    </div>
    {(photo||revealed>=30)&&<div className="print-controls"><button ref={resetButton} onClick={reset}>make me handsome again</button></div>}
    <span className="sr-only" role="status">{photo?"Photo revealed. Make me handsome again restores the print.":""}</span>
  </div>;
}
