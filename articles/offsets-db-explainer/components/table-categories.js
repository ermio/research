import { Box } from 'theme-ui'
import { Table } from '@carbonplan/components'

const table = [
  [
    <Box key='Forest' sx={{ color: 'green' }}>
      Forest
    </Box>,
    <>
      Offset credits generated by changes in the management of forested
      ecosystems, including efforts to plant, conserve, and expand forests.
    </>,
  ],
  [
    <Box key='Renewable energy' sx={{ color: 'purple' }}>
      Renewable energy
    </Box>,
    <>
      Offset credits generated by the development of renewable energy projects.
    </>,
  ],
  [
    <Box key='GHG management' sx={{ color: 'blue' }}>
      GHG management
    </Box>,
    <>
      Offset credits generated by changes in the management of greenhouse
      gasses, such that they contribute less to climate change. Projects often
      destroy greenhouse gasses or introduce substitute gasses in industrial
      processes.
    </>,
  ],

  [
    <Box key='Energy efficiency' sx={{ color: 'yellow' }}>
      Energy efficiency
    </Box>,
    <>
      Offset credits generated through technological changes that lower the
      emissions required to complete a task.
    </>,
  ],
  [
    <Box key='Fuel switching' sx={{ color: 'pink' }}>
      Fuel switching
    </Box>,
    <>
      Offset credits generated by using a lower polluting fuel to complete a
      task.
    </>,
  ],
  [
    <Box key='Agriculture' sx={{ color: 'orange' }}>
      Agriculture
    </Box>,
    <>
      Offset credits generated by changes in the management of agricultural
      crops or livestock. Changes in livestock waste management fall under GHG
      management.
    </>,
  ],
]

const TableCategories = () => {
  return (
    <Table
      columns={6}
      header={'Protocol Categories'}
      start={[1, 3]}
      width={[2, 4]}
      data={table}
    />
  )
}

export default TableCategories
