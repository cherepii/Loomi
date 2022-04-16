import { useContext } from "react"
import { ApiContext } from "../contexts/apiContext"

export const useService = () => {
  const {apiService} = useContext(ApiContext)

  return {apiService}
}