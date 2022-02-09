import React, { useEffect } from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-bs4";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-responsive";
import "./index.css";
import "./bootstrap.css";
import "./dataTables.bootstrap4.min.css";

function TableResponsive(props) {
  const { data, columns, id } = props;
  useEffect(() => {
    $(`#${id}`).DataTable({
      responsive: true,
      searching: false,
    });
  }, [id]);

  const { innerWidth: width, innerHeight: height } = window;
  console.log(width, height);
  let i = 0;
  for (let index = 0; index < columns.length; index++) {
    const element = columns[index];
    i = i + parseInt(element.headerStyle.width.replace("vw", ""));
    console.log(i);
  }

  return (
    <table id={id} className="display responsive nowrap table table-bordered table-striped" cellSpacing="0" width="100%">
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
