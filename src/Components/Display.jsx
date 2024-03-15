import { DataGrid, GridDeleteIcon } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { clickTableRow, deleteFormField } from "../Slice/Signup";
import { Button } from "@mui/material";

function Display() {
  const { formList, selectedTableRow } = useSelector((state) => state.signup);

  const dispatch = useDispatch();

  function handleDeleteClick({id, e}) {
    e.stopPropagation()
    dispatch(deleteFormField(id))
    console.log(id);
  }

  console.log(selectedTableRow);

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

    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <strong>
          <Button
            // style={{ width: "100%" }}
            variant="outlined"
            color="error"
            type="button"
            onClick={(e) => handleDeleteClick({id: params.row.id, e})}
          >
            <GridDeleteIcon />
          </Button>
        </strong>
      ),
    },
  ];

  const handleRowClick = (params) => {
    dispatch(clickTableRow(params.row));
  };

  return (
    <div>
      Display
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={formList}
          columns={columns}
          onRowClick={handleRowClick}
        />
      </div>
    </div>
  );
}

export default Display;
