import React, { useState } from 'react'
import { PieChart, Pie, ResponsiveContainer, Sector, Cell } from 'recharts'

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <text x={cx} y={cy} dx={-13} dy={25}>{`${Math.floor(
        percent * 100
      )}%`}</text>
    </g>
  )
}

export default function SkillLevelPiChart(props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const { skillSet } = props
  const skillSetData = [
    { value: skillSet.level, color: 'cornflowerblue', name: 'Skill' },
    { value: 100 - skillSet.level, color: '#58616a', name: 'Non-Skill' },
  ]
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart width={800} height={400}>
        <Pie
          data={skillSetData}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          cx={'50%'}
          cy={'50%'}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          onMouseEnter={(data, index) => {
            setActiveIndex(index)
          }}
          onMouseLeave={() => {
            setActiveIndex(0)
          }}
        >
          {skillSetData.map(e => (
            <Cell key={e.name} fill={e.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}
