import React from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-bs4";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-responsive";

function TableResponsive(props) {
  const { data, columns, id } = props;
  useEffect(() => {
    $(`#${id}`).DataTable({
      responsive: true,
      searching: false,
    });
  }, [id]);

  return (
    <table id={id} className="display responsive nowrap table table-bordered table-striped" cellspacing="0" width="100%">
      <thead>
        <tr>
          {columns.map((item, index) => {
            return (
              <th className={item.headerClasses} key={index} style={item.headerStyle}>
                {item.text}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rdx) => {
          return (
            <tr id={`row-${rdx}`} key={rdx} style={{ cursor: "pointer" }}>
              {columns.map((col, cdx) => {
                return (
                  <td className={col.classes} style={col.style} key={cdx}>
                    {col.formatter ? col.formatter(row[col.dataField], row, cdx) : row[col.dataField]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TableResponsive.propTypes = {
  id: PropTypes.string,
  data: PropTypes.array,
  columns: PropTypes.array,
  noDataText: PropTypes.string,
};

TableResponsive.defaultProps = {
  noDataText: "No Data",
  data: [],
};

export default TableResponsive;
