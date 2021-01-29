import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Season 1 Streaming Now</h2>
      <div>
        <h3>The Disappearing</h3>
        <p>A cinematic, bedroom pop adventure that traverses space and time. Recorded remotely among friends at the height of the 2020 Pandemic.</p>
        <p><Link to="/listen">Listen Now</Link></p>
      </div>
      <div>
        <iframe src="https://open.spotify.com/embed-podcast/episode/74NZohfONJIqwKTakqSL53" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>      
      </div>
      <div>
        <p>Spacetime Diaries is fictional podcast series where narration, dialogue, sound design, foley, score and song come together to create an immersive, cinematic listening experience. Available now on your favorite podcast app.</p>
      </div>
    </div>
  );
}

export default Home;