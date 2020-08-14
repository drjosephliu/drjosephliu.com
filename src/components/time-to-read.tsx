import React, { FC } from 'react'

export interface TimeToRead {
  mins: number
}

const TimeToRead: FC<TimeToRead> = ({ mins }: TimeToRead) => {
  let emojis = ""
  for (let i = 0; i < (Math.ceil(mins/5)); i++) {
    emojis += "⌛"
  }

  return (
    <>
    <span role="img" aria-label="hourglass">{emojis}</span> {mins} mins
    </>
  )
}

export default TimeToRead

