import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import "./styles.css";

const mockdata = [
  {
    id: "123456-1",
    adm: "MM/DD HH:MM",
    wr: "ER_1",
    as: "31/M",
    md: "A. Ramirez",
    rn: "B. Ramirez",
    dgn: "",
    lab: "3/1/1",
    meds: "2/0/0",
    status: "Admitted",
    complaint: "Stomach pain",
  },
  {
    id: "313412-3",
    adm: "MM/DD HH:MM",
    wr: "ER_2",
    as: "58/F",
    md: "C. Amarillo",
    rn: "D. Loyola",
    dgn: "1/0/0",
    lab: "3/1/2",
    meds: "2/0/0",
    status: "Admitted",
    complaint: "Difficulty breathing",
  },
]

const TablePage = () => {
  return (
    <div className="census__table--container">
      <Table className="census__table shadow-lg rounded-lg">
        <TableHeader className="census___header--title">
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead className="w-[150px]">ADM</TableHead>
            <TableHead className="w-[75px]">WR</TableHead>
            <TableHead className="w-[75px]">A/S</TableHead>
            <TableHead className="w-[170px]">MD</TableHead>
            <TableHead className="w-[170px]">RN</TableHead>
            <TableHead className="w-[70px]">DGN</TableHead>
            <TableHead className="w-[70px]">LAB</TableHead>
            <TableHead className="w-[70px]">MEDS</TableHead>
            <TableHead className="w-[120px]">STATUS</TableHead>
            <TableHead>Chief Complaint</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockdata.map(({ id, adm, wr, as, md, rn, dgn, lab, meds, status, complaint }) => (
            <TableRow>
              <TableHead>{id}</TableHead>
              <TableHead>{adm}</TableHead>
              <TableHead>{wr}</TableHead>
              <TableHead>{as}</TableHead>
              <TableHead>{md}</TableHead>
              <TableHead>{rn}</TableHead>
              <TableHead>{dgn}</TableHead>
              <TableHead>{lab}</TableHead>
              <TableHead>{meds}</TableHead>
              <TableHead>{status}</TableHead>
              <TableHead>{complaint}</TableHead>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TablePage;