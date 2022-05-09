import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.scss'

const rows = [
    {
    id: 1753,
    product: "Caribbean Jerk Chicken",
    customer: "John Smith",
    date: "1 March",
    amount: 1440,
    method: "Cash on Delivery",
    status: "Approved"
   },
   {
    id: 2422,
    product: "Chicken Wing Meal",
    customer: "Michael Doe",
    date: "1 March",
    amount: 1400,
    method: "Online Payment",
    status: "Pending"
   },
   {
    id: 3535,
    product: "Samosa & Spring Roll Platter",
    customer: "John Doe",
    date: "1 March",
    amount: 680,
    method: "Online Payment",
    status: "Pending"
   },
   {
    id: 4543,
    product: "Cobb Salad",
    customer: "John Doe",
    date: "21 April",
    amount: 1040,
    method: "Cash on Delivery",
    status: "Pending"
   },
   {
    id: 5532,
    product: "Chipotle Burrito Bowl",
    customer: "Harold Carol",
    date: "21 April",
    amount: 1040,
    method: "Cash on Delivery",
    status: "Approved"
   },
   
]

const TableSection = () => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
              <TableCell className="tablecolumn">Tracking ID</TableCell>
              <TableCell className="tablecolumn">Product</TableCell>
              <TableCell className="tablecolumn">Customer</TableCell>
              <TableCell className="tablecolumn">Date</TableCell>
              <TableCell className="tablecolumn">Amount</TableCell>
              <TableCell className="tablecolumn">Payment Method</TableCell>
              <TableCell className="tablecolumn">Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody className="tablebody">
          {rows.map((row) => (
            <TableRow
              key={row.id}
          >
              <TableCell className="tablecell">{row.id}</TableCell>
              <TableCell className="tablecell">{row.product}</TableCell>
              <TableCell className="tablecell">{row.customer}</TableCell>
              <TableCell className="tablecell">{row.date}</TableCell>
              <TableCell className="tablecell">{row.amount}</TableCell>
              <TableCell className="tablecell">{row.method}</TableCell>
              <TableCell className="tablecell">
                  <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableSection