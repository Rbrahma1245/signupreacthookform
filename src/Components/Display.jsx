import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

function Display() {
  const { formList } = useSelector((state) => state.signup);

  const columns = [
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "middleName", headerName: "Middle Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },

    { field: "email", headerName: "Email", width: 150 },
    { field: "phoneNo", headerName: "Phone No.", width: 150 },
    { field: "street", headerName: "Street", width: 150 },

    { field: "city", headerName: "City", width: 150 },
    { field: "state", headerName: "State", width: 150 },
    { field: "pinCode", headerName: "Pin Code", width: 150 },
  ];

  return (
    <div>
      Display
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={formList} columns={columns} />
      </div>
    </div>
  );
}

export default Display;
