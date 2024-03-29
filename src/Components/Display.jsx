import { DataGrid, GridDeleteIcon } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { clickTableRow, deleteFormField } from "../Slice/Signup";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

function Display({ setValue }) {
  const { formList } = useSelector((state) => state.signup);

  const dispatch = useDispatch();

  const confirmDelete = async () => {
    return Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
  };

  const handleDeleteClick = async ({ id, e }) => {
    const result = await confirmDelete();
    e.stopPropagation();

    if (result.isConfirmed) {
      dispatch(deleteFormField(id));
      console.log("Data deleted");
    }
  };

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
            onClick={(e) => handleDeleteClick({ id: params.row.id, e })}
          >
            <GridDeleteIcon />
          </Button>
        </strong>
      ),
    },
  ];

  const handleRowClick = (params) => {
    Object.keys(params.row).forEach((e) => {
      setValue(e, params.row[e]);
    });

    dispatch(clickTableRow(params.row));
  };

  return (
    <div style={{ height: 300, width: "100%", marginTop: 50 }}>
      <DataGrid rows={formList} columns={columns} onRowClick={handleRowClick} />
    </div>
  );
}

export default Display;
