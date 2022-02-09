import TableResponsive from "./components/TableResponsive";
import data from "./data.json";

function App() {
  const columnsBasic = [
    {
      dataField: "first_name",
      text: "First Name",
      headerStyle: { width: "50vw", fontSize: "12px" },
      headerClasses: "text-center",
      classes: "py-1",
      style: { fontSize: "12px" },
      formatter: (cellContent, row, idx) => {
        return (
          <input
            className="form-control"
            value={cellContent}
            style={{ fontSize: "12px" }}
            onChange={(e) => {
              console.log(e, row, idx);
            }}
          />
        );
      },
      sort: true,
    },
    {
      dataField: "last_name",
      text: "Last Name",
      headerStyle: { width: "50vw", fontSize: "12px" },
      headerClasses: "text-center",
      classes: "py-1",
      style: { fontSize: "12px" },
    },
    {
      dataField: "email",
      text: "Email",
      headerStyle: { width: "100vw", fontSize: "12px" },
      headerClasses: "text-center",
      classes: "py-1",
      style: { fontSize: "12px" },
    },
    {
      dataField: "gender",
      text: "Gender",
      headerStyle: { width: "20vw", fontSize: "12px" },
      headerClasses: "text-center",
      classes: "py-1",
      style: { fontSize: "12px" },
    },
    {
      dataField: "ip_address",
      text: "IP Address",
      headerStyle: { width: "25vw", fontSize: "12px" },
      headerClasses: "text-center",
      classes: "py-1",
      style: { fontSize: "12px" },
    },
    {
      dataField: "company_name",
      text: "Company Name",
      headerStyle: { width: "25vw", fontSize: "12px" },
      headerClasses: "text-center",
      classes: "py-1",
      style: { fontSize: "12px" },
    },
    {
      dataField: "phone",
      text: "Phone",
      headerStyle: { width: "25vw", fontSize: "12px" },
      headerClasses: "text-center",
      classes: "py-1",
      style: { fontSize: "12px" },
    },
  ];

  return (
    <div className="container">
      <TableResponsive id="tableResponsive" columns={columnsBasic} data={data} />
    </div>
  );
}

export default App;
