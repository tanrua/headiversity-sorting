import * as React from 'react'
import Link from '@mui/material/Link'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import Title from '../dashboard/Title'
import getComparator from '../../utils/TableUtils'
import '../table/PokemonTable.scss'

function preventDefault(event) {
  event.preventDefault()
}

export default function PokemonTable({
  dataset,
  loading,
  setLoading,
}) {
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('id')
  const [selected, setSelected] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = dataset.map((n) => n.id)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  if (!dataset) return "No Pokemon Loaded"

  console.log(dataset)
  return (
    <React.Fragment>
      <Title>Pokemon List</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
          <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Sub Type</TableCell>
            <TableCell>Score</TableCell>
            <TableCell>HP</TableCell>
            <TableCell>Atk</TableCell>
            <TableCell>Def</TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataset.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell className={"rounded-cell type-"+row.type}>{row.type}</TableCell>
              <TableCell className={"rounded-cell type-"+row.sub_type}>{row.sub_type}</TableCell>
              <TableCell>{row.total_score}</TableCell>
              <TableCell>{row.hp}</TableCell>
              <TableCell>{row.attack}</TableCell>
              <TableCell>{row.defense}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more pokemon
      </Link>
    </React.Fragment>
  )
}
