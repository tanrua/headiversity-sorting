import * as React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';

import { Box, Skeleton, Checkbox } from '@mui/material';

import '../table/PokemonTable.scss'

export default function SkeletonTable({
  headCells,
  skeletonRowCount
}) {

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby='tableTitle'
            size='small'
          >
            <TableHead>
              <TableRow>
                <TableCell padding='checkbox'>
                  <Checkbox color='primary' />
                </TableCell>

                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? 'right' : 'left'}
                    padding={headCell.disablePadding ? 'none' : 'normal'}
                  >
                    <TableSortLabel>
                      {headCell.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.apply(null, Array(25)).map((row, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell component='th' scope='row' padding='checkbox'>
                      <Checkbox
                        color='primary'
                      />
                    </TableCell>
                    {headCells.map((headCell, index) => {
                      return (
                        <TableCell >
                          <Skeleton animation='wave' variant='text' />
                        </TableCell>
                      )
                    })}
                </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          component='div'
          count={skeletonRowCount}
          rowsPerPage={skeletonRowCount}
          page={1}
        />
      </Paper>
    </Box>
  );
}
