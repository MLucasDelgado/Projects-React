import type { ReactNode } from "react"

type SquareProps = {
  children?: ReactNode
  isSelected?: boolean
  updateBoard?: (index: number) => void
  index?: number
}

export const Square = ({ children, isSelected, updateBoard, index }: SquareProps) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    if (updateBoard && index !== undefined) {
      updateBoard(index)
    }
  }

  return (
    <div onClick={handleClick} className={className} key={index}>
      {children}
    </div>
  )
}