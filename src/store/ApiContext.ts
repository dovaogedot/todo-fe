import { createContext } from "react";
import { ITodoRepository } from "../api/ITodoRepository"

const ApiContext = createContext<ITodoRepository>(null!)

export default ApiContext