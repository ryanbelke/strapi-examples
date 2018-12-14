/* /lib/apollo.js */

import { HttpLink } from "apollo-link-http";
import { withData } from "next-apollo";
const graphqlURL = process.env.API_URL || "https://strapi-backend-test.herokuapp.com" 
const config = {
  link: new HttpLink({
    uri: `${graphqlURL}/graphql`, // Server URL (must be absolute)
    // opts: {
    //   credentials: "same-origin" // Additional fetch() options like `credentials` or `headers`
    // }
  })
};
export default withData(config);
