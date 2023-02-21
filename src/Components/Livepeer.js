import { Player } from "@livepeer/react";
// import Image from 'next/image';
import { useEffect } from "react";
// import blenderPoster from '../../../public/images/blender-poster.png';

 function Player1({name, link}) {
  // console.log(typeof link);
  // var data;

  // async function livepeer(name,link){

  //   var url = "https://livepeer.studio/api/asset/import";
  
  //   var options = {
  //     method: "POST",
  //     headers: {
  //       Authorization: "Bearer f2041ae4-6eb8-4b9d-bfd5-6117818e3291",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       url: link,
  //       name: name,
  //     }),
  //   };

  //   var data;

  //   try {
  //     const response = await fetch(url, options);
  //     data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
    
  //   return data.asset.playbackId;

  
  //   // console.log(data);


  // }


  const id =  "c5beptly5n3lcvqj";
  // console.log(id);

    return (
      <Player
        title={name}
        playbackId = {id}
        showPipButton
        objectFit="cover"
        priority
      />
      // <></>
    );
}

export default Player1;
