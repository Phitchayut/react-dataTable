import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Button } from "@material-tailwind/react";

const style = {
  headRow: {
    style: {
      backgroundColor: "blue",
      borderRadius: "5px",
      color: "white"
    }
  }
};

const urlApi = "https://jsonplaceholder.typicode.com/users";
export default function App() {
  const [users, setUsers] = useState([]);
  const fethData = async () => {
    await axios.get(urlApi).then((res) => setUsers(res.data));
  };
  useEffect(() => {
    fethData();
  }, []);

  const clickHandler = (id) => {
    alert(id);
  };

  const column = [
    {
      name: "ID",
      selector: (row) => row.id
    },
    {
      name: "Name",
      selector: (row) => row.name
    },
    {
      name: "User",
      selector: (row) => row.username,
      sorttable: true
    },
    {
      name: "Email",
      selector: (row) => row.email
    },
    {
      name: "Action",
      cell: (row) => (
        <Button color="red" onClick={() => clickHandler(row.id)}>
          Action
        </Button>
      )
    }
  ];

  return (
    <div className="App container mx-auto">
      <DataTable
        columns={column}
        data={users}
        pagination
        customStyles={style}
      ></DataTable>
    </div>
  );
}
