/** @jsx jsx */

import { FC } from 'react'
import { Box, jsx, Text } from 'theme-ui'

import TimeToRead from './time-to-read'

export interface IntroProps {
  date?: string
  title: string
  description?: string
  mins?: number
}

const Intro: FC<IntroProps> = ({ date, title, description, mins }) => {
  return (
    <Box>
      <Text as="h1">{title}</Text>
      {date && <Text as="p" sx={{ m: `10px 0px`, fontSize: 2, fontFamily: 'Georgia, serif', color: `text`, 'a:hover > &': { color: `text` } }}>
        {date} {mins && <span>• <TimeToRead mins={mins} /></span>}
      </Text> }
      {description && <Text as="p" sx={{ my: 3, fontSize: 4, fontFamily: `Georgia, serif` }}>
        {description}
      </Text>}
    </Box>
  )
}

export default Intro
