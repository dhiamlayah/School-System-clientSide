import React from 'react';
 import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './title';


export default function Charts({tablechild}) {
  
  return (
    <React.Fragment>
      <Title>Time Table</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell>8h-10h</TableCell>
            <TableCell>10h-12h</TableCell>
            <TableCell>14h-16h</TableCell>
            <TableCell>16h-18h</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tablechild.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.Day}</TableCell>
              <TableCell>{row.Sub1}</TableCell>
              <TableCell>{row.Sub2}</TableCell>
              <TableCell>{row.Sub3}</TableCell>
              <TableCell>{row.Sub4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}