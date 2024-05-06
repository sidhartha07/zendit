import React, { useState } from "react";
import "./Home.css";
import { searchIcon, userPic, eye } from "../../assets/index";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { pages } from "../../util/NavLinks";

function createData(name, type, createdBy, status, action) {
  return { name, type, createdBy, status, action };
}

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('')

  const rows = [
    createData(
      "Installation template",
      "Installation",
      "David Nowak",
      "Active",
      "Eye"
    ),
    createData(
      "Crane template",
      "Installation",
      "David Nowak",
      "Inactive",
      "Eye"
    ),
    createData(
      "Crane template2",
      "Installation",
      "David Nowak",
      "Inactive",
      "Eye"
    ),
  ];

  const filteredRows = rows.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  })
  return (
    <div id="home">
      <div className="wrapper">
        <div className="top-section">
          <div className="heading">Templates</div>
          <div onClick={() => navigate(pages.new)} className="add-btn">
            + Add New
          </div>
        </div>
        <div className="main-body">
          <div className="search-div">
            <input onChange={(e) => setSearchQuery(e.target.value)} type="text" className="search-box" placeholder="Search..." />
            <img className="search-icon" src={searchIcon} alt="" />
          </div>

          <div className="table">
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="table-head">Template name</TableCell>
                    <TableCell className="table-head">Template type</TableCell>
                    <TableCell className="table-head">Created by</TableCell>
                    <TableCell className="table-head">Status</TableCell>
                    <TableCell className="table-head">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredRows.map((row, index) => (
                    <TableRow
                      key={row.name}
                      style={{ backgroundColor: index % 2 === 0 && "#F9F9F9" }}
                    >
                      <TableCell className="temp-name">{row.name}</TableCell>
                      <TableCell className="other-fields">{row.type}</TableCell>
                      <TableCell className="other-fields">
                        <div className="created-by">
                          <img src={userPic} alt="" />
                          <p>{row.createdBy}</p>
                        </div>
                      </TableCell>
                      <TableCell className="other-fields">
                        <div
                          className={
                            row.status === "Active"
                              ? `status-active`
                              : `status-inactive`
                          }
                        >
                          {row.status}
                        </div>
                      </TableCell>
                      <TableCell className="other-fields">
                        <div>
                          <img src={eye} alt="" />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
