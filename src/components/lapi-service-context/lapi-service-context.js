import { createContext } from "react";

const { 
  Provider: LapiServiceProvider, 
  Consumer: LapiServiceConsumer } = createContext();

export {
  LapiServiceConsumer,
  LapiServiceProvider
}