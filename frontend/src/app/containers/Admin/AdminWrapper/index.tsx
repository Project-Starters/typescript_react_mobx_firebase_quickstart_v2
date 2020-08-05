import * as React from "react";
import { Sidebar } from "app/components/Sidebar";

interface Props {}

interface State {}

export class AdminWrapper extends React.Component<Props, State> {
  constructor(props: Props, context: any) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Sidebar
          navItems={[
            {
              imgSrc: "http://placehold.it/64x64",
              key: "home",
              link: "/admin",
              name: "Home"
            },
            {
              imgSrc: "http://placehold.it/64x64",
              key: "addRide",
              link: "/admin/addRide",
              name: "Add Ride"
            },
            {
              imgSrc: "http://placehold.it/64x64",
              key: "addRequest",
              link: "/admin/addRequest",
              name: "Add Request"
            },
            {
              imgSrc: "http://placehold.it/64x64",
              key: "addOffer",
              link: "/admin/addOffer",
              name: "Add Offer"
            }
          ]}
        />
        <div style={{ paddingLeft: "5em" }}>{this.props.children}</div>
      </div>
    );
  }
}
