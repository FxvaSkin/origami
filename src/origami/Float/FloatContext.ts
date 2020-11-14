import { createContext } from 'react'
interface IFloatContext {
  floats: React.RefObject<HTMLDivElement>[]
  onAddFloat?: (ref: React.RefObject<HTMLDivElement>) => void
  onRemoveFloat?: (ref: React.RefObject<HTMLDivElement>) => void
  isTopFloat?: (ref: React.RefObject<HTMLDivElement>) => boolean
}
export const FloatContext = createContext<IFloatContext | null>(null)
