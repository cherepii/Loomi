import React from "react"
import { LapiServiceConsumer } from "../lapi-service-context"

const withLapiService = () => (Wrapped) => {
  return (props) => {
    return (
      <LapiServiceConsumer>
        {
          (lapiService) => {
            return (
              <Wrapped {...props} lapiService={lapiService} />
            )
          }
        }
      </LapiServiceConsumer>
    )
  }
}

export default withLapiService;