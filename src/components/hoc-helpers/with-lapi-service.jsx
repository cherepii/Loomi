import { LapiServiceConsumer } from "../contexts"

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