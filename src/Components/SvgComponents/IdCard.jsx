import React from "react";

function IdCard(props) {

  const {fill, width, height} = props;

  return (
    <div>
      <svg
        fill={fill} 
        width={width} 
        height={height}
        enableBackground="new 0 0 36 36"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="m34.928 20.591c-3.693-5.848-3.199-11.778-4.979-14.596s-7.138-7.714-20.103.473-9.84 17.35-7.882 20.45c9.166 14.515 39.504 4.031 32.964-6.327z"
          fill="#efefef"
        />
        <path
          d="m29.25 11.75v12.5c0 1.105-.895 2-2 2h-18.5c-1.105 0-2-.895-2-2v-12.5c0-1.105.895-2 2-2h18.5c1.105 0 2 .895 2 2z"
          fill="#f3f3f1"
        />
        <path
          d="m9 24.25v-12.5c0-1.105.895-2 2-2h-2.25c-1.105 0-2 .895-2 2v12.5c0 1.105.895 2 2 2h2.25c-1.105 0-2-.895-2-2z"
          fill="#d5dbe1"
        />
        <circle cx="13.5" cy="15.5" fill="#2fdf84" r="1.75" />
        <path
          d="m15.25 19.75h-3.5c-1.105 0-2 .895-2 2v.5h7.5v-.5c0-1.105-.895-2-2-2z"
          fill="#2fdf84"
        />
        <path
          d="m14 19.75h-2.25c-1.105 0-2 .895-2 2v.5h2.25v-.5c0-1.105.895-2 2-2z"
          fill="#00b871"
        />
        <path
          d="m13.5 17.25c.431 0 .82-.162 1.125-.42-.379-.321-.625-.794-.625-1.33s.246-1.009.625-1.33c-.305-.258-.694-.42-1.125-.42-.966 0-1.75.784-1.75 1.75s.784 1.75 1.75 1.75z"
          fill="#00b871"
        />
        <g fill="#a4afc1">
          <path
            d="m30.033 4.644h2v1h-2z"
            transform="matrix(.707 -.707 .707 .707 5.452 23.45)"
          />
          <path
            d="m26.467 3.967h1v2h-1z"
            transform="matrix(.707 -.707 .707 .707 4.384 20.519)"
          />
          <path
            d="m30.533 8.033h1v2h-1z"
            transform="matrix(.707 -.707 .707 .707 2.7 24.585)"
          />
        </g>
        <path d="m27.25 27h-18.5c-1.517 0-2.75-1.233-2.75-2.75v-12.5c0-1.517 1.233-2.75 2.75-2.75h18.5c1.517 0 2.75 1.233 2.75 2.75v12.5c0 1.517-1.233 2.75-2.75 2.75zm-18.5-16.5c-.689 0-1.25.561-1.25 1.25v12.5c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25v-12.5c0-.689-.561-1.25-1.25-1.25z" />
        <path d="m13.5 18c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zm0-3.5c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z" />
        <path d="m18 22.25h-1.5v-.5c0-.689-.561-1.25-1.25-1.25h-3.5c-.689 0-1.25.561-1.25 1.25v.5h-1.5v-.5c0-1.517 1.233-2.75 2.75-2.75h3.5c1.517 0 2.75 1.233 2.75 2.75z" />
        <path d="m20.75 13.5h5.5v1.5h-5.5z" />
        <path d="m20.75 17.5h5.5v1.5h-5.5z" />
        <path d="m20.75 21.5h5.5v1.5h-5.5z" />
      </svg>
    </div>
  );
}

export default IdCard;
