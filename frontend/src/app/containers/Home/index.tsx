import * as React from "react";

interface Props { }
interface State {
}


export class Home extends React.Component<Props, State> {
  constructor(props: Props, context: any) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    console.log("HOME")
    return (
      <div>
        Home
      </div>

      );
  }
}
