import { Box } from "@chakra-ui/core";

const Say = ({ children, typing }) => {
  return (
    <div
      className="bubble say"
      style={{
        width: "14rem",
      }}
    >
      <span className="bubble-content">{children}</span>
    </div>
  );
};

const Reply = ({ children, typing }) => {
  return (
    <div className="bubble reply reply-freeform say">
      <span className="bubble-content">
        <span className="bubble-button bubble-pick">{children}</span>
      </span>
    </div>
  );
};

export default () => {
  return (
    <>
      <div className="bubble-container">
        <div className="bubble-wrap">
          <Say>Saying something</Say>
          <Say>Shhhhh! You know nuthin!</Say>
          {/* <Say typing={true} /> */}
          <Reply>Replying to you</Reply>
          <Reply>Try again</Reply>
        </div>
      </div>

      <style>
        {`
        /* setup container styles */
        .bubble-container {
          background: #dcdde0;
          height: 520px;
          max-width: 750px;
          width: 100%;
          margin: 0 auto;
          overflow: hidden;
          position: relative;
        }
        .bubble-wrap {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: -17px;
          padding: 10px calc(17px + 10px) 30px 10px;
          overflow-y: scroll;
          -webkit-overflow-scrolling: touch;
          -webkit-transform: translate3d(0, 0, 0);
        }
        /* optional page styles */
        h1 {
          text-align: center;
          font-weight: 300;
          font-size: 4em;
          margin: .5em auto 0.15em;
        }
        body {
          font-family: "Helvetica Neue", Helvetica, sans-serif;
          margin: 0;
        }


        /* style bubbles */
        .bubble,
        .bubble-typing {
          color: #212121;
          background: rgba(255, 255, 255, 0.84);
          padding: 8px 16px;
          border-radius: 5px 15px 15px 15px;
          font-weight: 400;
          text-transform: none;
          text-align: left;
          font-size: 16px;
          letter-spacing: .5px;
          margin: 0 0 2px 0;
          max-width: 65%;
          float: none;
          clear: both;
          line-height: 1.5em;
          word-break: break-word;
          transform-origin: left top;
          transition: all 200ms;
          box-sizing: content-box;
        }
        .bubble .bubble-content {
          transition: opacity 150ms;
        }
        .bubble:not(.say) .bubble-content {
          opacity: 0;
        }
        .bubble-typing.imagine,
        .bubble.imagine {
          transform: scale(0);
          transition: all 200ms, height 200ms 1s, padding 200ms 1s;
        }
        .bubble.imagine {
          margin: 0;
          height: 0;
          padding: 0;
        }

        /* style media that's inside bubbles */
        .bubble .bubble-content img {
          width: calc(100% + 32px);
          margin: -8px -16px;
          overflow: hidden;
          display: block;
          border-radius: 5px 15px 15px 15px;
        }

        /* interaction recall styles */
        .bubble.history,
        .bubble.history .bubble-content,
        .bubble.history .bubble-content .bubble-button,
        .bubble.history .bubble-content .bubble-button:hover {
          transition: all 0ms !important;
        }
        .bubble.history {
          opacity: .25;
        }

        /* style user response reply */
        .bubble.reply {
          background: transparent;
          box-shadow: none;
          float: right;
          position: relative;
          transform-origin: right top;
          margin: 8px 0 10px;
          padding: 0;
          max-width: 65%;
        }
        .bubble.reply.history {
          margin: 0 0 2px 0; /* remembered bubbles do not need to stand out via margin */
        }
        .bubble.reply.say {
          /*
          min-width: 350px;
          */
        }
        .bubble.reply .bubble-content {
          transition: all 200ms;
        }
        .bubble.reply .bubble-content .bubble-button {
          background: rgba(44, 44, 44, 0.67);
          color: #fff;
          padding: 8px 16px;
          border-radius: 15px 15px 5px 5px;
          margin-left: 2px;
          text-align: center;
          display: inline-block;
          float: right;
          cursor: pointer;
          transition: all 200ms;
          text-decoration: none;
          word-break: normal;
          box-sizing: content-box;
          /* animation-duration: 1s; */
          animation-name: "animate-reply";
          animation-play-state: paused;
          animation-fill-mode: forwards;
          /* opacity: 0; */
          transform: translate3d(0px, 0px, 0px);
          animation-delay: -3s;
          -ms-animation-delay: -3;
          -webkit-animation-delay: -3s;
        }
        @keyframes animate-reply {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .bubble.reply.say .bubble-content .bubble-button {
          animation-play-state: running;
          margin-top: 3px;
          min-height: 24px;
          overflow: hidden;
        }
        
        .bubble.reply .bubble-content .bubble-button:first-child {
          border-radius: 15px 15px 15px 5px;
          margin-left: 2px;
        }
        .bubble.reply .bubble-content .bubble-button:last-child,
        .bubble.reply .bubble-content .bubble-button.bubble-pick {
          border-radius: 15px 15px 5px 15px;
        }
        .bubble.reply.bubble-picked .bubble-content .bubble-button {
          transform: scale(0) translate3d(0px, 0px, 0px);
          padding: 0;
        }
        .bubble.reply:not(.bubble-picked) .bubble-content .bubble-button:hover,
        .bubble.reply .bubble-content .bubble-button.bubble-pick {
          background: rgba(44, 44, 44, 1);
          transform: scale(1) translate3d(0px, 0px, 0px);
          padding: 8px 16px;
          height: auto;
        }
        
        /* interaction recall styles */
        .bubble.history .bubble-content .bubble-button,
        .bubble.history.reply:not(.bubble-picked) .bubble-content .bubble-button:hover,
        .bubble.history.reply .bubble-content .bubble-button.bubble-pick {
          background: rgba(44, 44, 44, 0.67);
          cursor: default;
        }
        
        /* input fields for bubbles */
        .bubble .bubble-content input {
          background: linear-gradient(193deg, #1faced, #5592dc 100%) !important;
          box-shadow: 0 0px 1px 0px #000, 0 -1px 0 0px rgba(255, 255, 255, 0.38) inset;
          text-shadow: 0 1px rgba(0, 0, 0, 0.35);
          border: 0;
          outline: 0;
        }
        .bubble .bubble-content input::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: rgba(255, 255, 255, .5);
          text-shadow: none;
        }
        .bubble .bubble-content input::-moz-placeholder {
          /* Firefox 19+ */
          color: rgba(255, 255, 255, .5);
          text-shadow: none;
        }
        .bubble .bubble-content input:read-only {
          background: linear-gradient(166deg, #48121d, #0d4058 100%) !important;
        }
    
      `}
      </style>
    </>
  );
};
