import { Player } from "@livepeer/react";
// import Image from 'next/image';

// import blenderPoster from '../../../public/images/blender-poster.png';

async function Player1({ link, name }) {
  // console.log(typeof link);

  var data;

  var url = "https://livepeer.studio/api/asset/import";

  var options = {
    method: "POST",
    headers: {
      Authorization: "Bearer f2041ae4-6eb8-4b9d-bfd5-6117818e3291",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: link,
      name: name,
    }),
  };
  try {
    const response = await fetch(url, options);
    data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  // .then(response =>  response.json()).then(data => ans=data).catch(err => console.error(err));

  // console.log(data);

  const id = data.asset.playbackId;
  // console.log(id);

    return (
      <Player
        title={name}
        playbackId = {id}
        showPipButton
        objectFit="cover"
        priority
      />
    );
}

export default Player1;
