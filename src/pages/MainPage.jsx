import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";


const MainPage = () => {
  const [tableData, setTableData] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    setLoader(true);
    try {
      const url =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSRYHJBl-aUj4oL3uGTHiSmxSPjBSXNckPD8tfcSjSmn8ixmJXCt0aMUEzbm7hB4RcF0nxGQeBHJUoV/pub?output=csv"; // Your CSV URL
      const response = await axios.get(url);
      const rows = response.data.split("\n").map((row) => row.split(","));
      setTableData(
        rows.slice(1).map((row, index) => ({
          id: index,
          domain: row[0],
          niche1: row[1],
          niche2: row[2],
          traffic: row[3],
          dr: row[4],
          da: row[5],
          language: row[6],
          price: row[7],
          spam: row[8],
          
        }))
      );
    } catch (error) {
      console.error("Error while fetching CSV data:", error.message);
    }
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "domain", headerName: "DOMAIN", width: 250 },
    { field: "niche1", headerName: "NICHE 1", width: 100 },
    { field: "niche2", headerName: "NICHE 2", width: 150 },
    { field: "traffic", headerName: "TRAFFIC", width: 150 },
    { field: "dr", headerName: "DR", width: 100 },
    { field: "da", headerName: "DA", width: 100 },
    { field: "language", headerName: "LANGUAGE", width: 150 },
    { field: "price", headerName: "PRICE", width: 100 },
    { field: "spam", headerName: "SPAM SCORE", width: 150 },
  ];

  return (
    <div className="flex flex-col gap-6 lg:px-10 md:px-8 px-5 lg:py-10 md:py-8 py-5">
      
      <div className="flex flex-col gap-1">
      <h1 className='text-xl font-semibold'>Welcome !</h1>
      <p className=''>The data shown in the table contains information about Employees in the organization, their respective country, rating and their admin status.  </p>
      </div>
      <div style={{ height: "80vh", width: "100%", border :'1px solid #08b100', borderRadius: "8px"}}>
        <DataGrid
          rows={tableData}
          columns={columns}
          loading={loader}
          slots={{ toolbar: GridToolbar }} 
          sx={{
            '& .MuiDataGrid-toolbarContainer': {
              backgroundColor: '#f8f8f8', // Set toolbar background color to green
              color: '#ffffff', // Set text color to white for contrast
              width: '100%', // Make the toolbar span full width
              padding: '8px', // Add some padding
              borderRadius: '8px 8px 0 0', // Optional: smooth corners
            },
            '& .MuiButtonBase-root': {
              color: '#08b100', // Ensure buttons inside the toolbar inherit the text color
            },
          }}
        />
      </div>
    </div>
  );
};

export default MainPage;
