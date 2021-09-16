import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import { CustomRow, CustomCol, CustomTable } from '../AntDComponents';

const TableSchedule  =(): React.ReactElement=>{
    const Columns: ColumnsType<any> = [
        {
          title: "Codigo",
          align: "center",
        },
        {
          title: "Lunes",
          align: "center",
        },
        {
          title: "Martes",
          align: "center",
        },
        {
          title: "Miercoles",
          align: "center",
        },
        {
          title: "Jueves",
          align: "center",
        },
        {
          title: "Viernes",
          align: "center",
        },
        {
          title: "Sabados",
          align: "center",
        },
     
      ]
    return ( <CustomRow>
        <CustomCol xs={24}>
          <CustomTable bordered columns={Columns}  />
        </CustomCol>
      </CustomRow>)
}
export default TableSchedule 