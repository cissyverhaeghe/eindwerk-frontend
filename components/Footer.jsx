import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footercontainer">
        <hr />
        <div className="icons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.facebook.com"
          >
            <AiOutlineFacebook />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.instagram.com"
          >
            <AiOutlineInstagram />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.twitter.com"
          >
            <AiOutlineTwitter />
          </a>
        </div>
        <p>©Cissy Verhaeghe</p>
      </div>
    </div>
  );
};

export default Footer;
