import * as React from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

import EnhancedTableHead from './EnhancedTableHead'
import EnhancedTableToolbar from './EnhancedTableToolbar'
import getComparator from '../../utils/TableUtils'
import { HeadCellProps } from '../../constants/pokemonTableConstants'
import '../table/PokemonTable.scss'

export default function PokemonTable(params:{
  headCells: any,
  dataset: any[],
}) {
  const [order, setOrder] = React.useState<'asc'|'desc'>('asc')
  const [orderBy, setOrderBy] = React.useState<string>('id')
  const [selected, setSelected] = React.useState<any>([]) //TODO: Figure out a pokemon type? There must be a best practice for this
  const [page, setPage] = React.useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(25)

  const handleRequestSort = (event: Event, property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: Event & {
    target: HTMLInputElement
  }) => {
    const { target } = event
    if (target.checked) {
      const newSelected = params.dataset.map((n: any) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  }

  const handleClick = (id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected:any[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null, 
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = ( 
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> 
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty dataset.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - params.dataset.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      params.dataset.slice().sort(getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  )

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby='tableTitle'
            size='small'
          >
            <EnhancedTableHead
              headCells={params.headCells}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={params.dataset.length}
            />
            <TableBody>
              {visibleRows.map((row: any, index: number) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(row.id)}
                    role='checkbox'
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                    className={row.legendary ? 'legendary' : ''}
                  >
                    <TableCell 
                      padding='checkbox'
                      component='th'
                      scope='row'
                    >
                      <Checkbox
                        color='primary'
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      id={labelId}
                      padding='none'
                      align='center'
                    >
                      {row.id}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell className={'rounded-cell type-'+row.type}>{row.type}</TableCell>
                    <TableCell className={'rounded-cell type-'+row.sub_type}>{row.sub_type}</TableCell>
                    <TableCell>{row.total_score}</TableCell>
                    <TableCell>{row.hp}</TableCell>
                    <TableCell>{row.attack}</TableCell>
                    <TableCell>{row.defense}</TableCell>
                    <TableCell>{row.sp_attack}</TableCell>
                    <TableCell>{row.sp_defense}</TableCell>
                  </TableRow>
                )
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 33 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          component='div'
          count={params.dataset.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
