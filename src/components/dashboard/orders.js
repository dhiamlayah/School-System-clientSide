import * as React from 'react';
 import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './title';




export default function Orders({absenceChild}) {
  
  return (
    <React.Fragment>
      <Title>Recent Absence</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Teacher</TableCell>
            <TableCell align="right">Subject</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {absenceChild.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{`Mr./Ms. ${row.teacher}`}</TableCell>
              <TableCell align="right">{`${row.subject}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" sx={{ mt: 3 }}>
        See More
      </Link>
    </React.Fragment>
  );
}