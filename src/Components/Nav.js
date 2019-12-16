import React from "react";
// const [state , setState] = useState();
function Nav(Props) {
  let button;
  if (Props.lost) {
    button = (
      <button className="btn btn-danger" onClick={Props.reset}>
        Rest Game
      </button>
    );
  }
  return (
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <span class="navbar-brand" >
            Clicky Game
          </span>
        </div>
        <ul class="nav navbar-nav navbar-left"> {button}</ul>

        <ul class="nav navbar-nav navbar-right">
          <li>High Score : {Props.highScore}</li>
          <li>Score: {Props.score}</li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
