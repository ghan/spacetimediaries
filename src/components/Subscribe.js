import React from "react";
import { Link } from "react-router-dom";

function Subscribe() {
  return (
    <>
      <h3> 
        Stay in touch
      </h3>
      <p>We'll let you know when new stories are published</p>
      <div>
        <div id="mc_embed_signup">
          <form action="https://ghan.us7.list-manage.com/subscribe/post?u=9f293a8cecf2e282b7a9a42f7&amp;id=79532a4a1c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
              <div className="mc-field-group">
                <label for="mce-EMAIL">Email Address </label>
                <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{display:"none"}} />
                <div className="response" id="mce-success-response" style={{display:"none"}} />
              </div>
              <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_9f293a8cecf2e282b7a9a42f7_79532a4a1c" tabindex="-1" value="" /></div>
              <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" /></div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Subscribe;


