import React from 'react'
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
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
}

export default function SkillLevelPiChart(props) {
  const { skillSet } = props
  const skillSetData = [
    { value: 100 - skillSet.level, color: '#58616a', name: 'Non-Skilled' },
    { value: skillSet.level, color: 'cornflowerblue', name: 'Skilled' },
  ]
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart width={800} height={400}>
        <Pie
          data={skillSetData}
          activeShape={renderActiveShape}
          cx={'50%'}
          cy={'50%'}
          dataKey="value"
          startAngle={90}
          endAngle={450}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
        >
          {skillSetData.map(e => (
            <Cell key={e.name} fill={e.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}
