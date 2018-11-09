/* /lib/apollo.js */

import { HttpLink } from "apollo-link-http";
import { withData } from "next-apollo";

const config = {
  link: new HttpLink({
    uri: "https://shrouded-stream-98919.herokuapp.com/graphql", // Server URL (must be absolute)
    // opts: {
    //   credentials: "same-origin" // Additional fetch() options like `credentials` or `headers`
    // }
  })
};
export default withData(config);
