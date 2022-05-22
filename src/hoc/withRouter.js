import { useMatch } from "react-router-dom";

export function withRouter(Component) {
  const ComponentWithRouterProp = (props) => {
    let match = useMatch("/profile/:userId/");
    return <Component {...props} match={match} />;
  };

  return ComponentWithRouterProp;
}
