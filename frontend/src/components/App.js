import React from "react";
import Clock from "./Clock";
import Smeac from "./smeac/Smeac";
import Weather from "./weather/Weather";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>UTC</h1>
          <Clock timeZone="UTC" />
        </div>
        <div>
          <h1>Local</h1>
          <Clock timeZone="Europe/London" />
        </div>
        <div>
          <Smeac />
        </div>

        <div>
          <Weather inshoreStation="Rattray Head to Berwick upon Tweed" />
        </div>
      </div>
    );
  }
}

export default App;
