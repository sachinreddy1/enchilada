import React from "react";

import {
  Container,
  Segment
} from "semantic-ui-react"

import {
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  FacebookShareButton,
  FacebookIcon
} from "react-share"

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Segment>
          <TwitterShareButton
            url="https://enchilada.wiki"
            className="share-button"
          >
            <TwitterIcon size={32} round={true}></TwitterIcon>
          </TwitterShareButton>

          <FacebookMessengerShareButton
            url="https://enchilada.wiki"
            className="share-button"
          >
            <FacebookMessengerIcon size={32} round={true}></FacebookMessengerIcon>
          </FacebookMessengerShareButton>

          <FacebookShareButton
            url="https://enchilada.wiki"
            className="share-button"
          >
            <FacebookIcon size={32} round={true}></FacebookIcon>
          </FacebookShareButton>

          <EmailShareButton
            url="https://enchilada.wiki"
            className="share-button"
          >
            <EmailIcon size={32} round={true}></EmailIcon>
          </EmailShareButton>
        </Segment>
      </Container>
    </div>
  );
}

export default Footer;
