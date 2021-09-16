import { ColumnsType } from "antd/lib/table"
import React from "react"
import {
  CustomCol,
  CustomFormItem,
  CustomLayout,
  CustomRow,
  CustomSelect,
  CustomTable,
} from "../AntDComponents"

const Score = (): React.ReactElement => {
  const Columns: ColumnsType<any> = [
    {
      title: "Código",
      align: "center",
    },
    {
      title: "Asignatura",
      align: "center",
    },
    {
      title: "Créditos",
      align: "center",
    },
    {
      title: "Calificación",
      align: "center",
    },
  ]
  const Title = () => {
    return (
      <>
        <CustomFormItem label={'Periodo'}>
          <CustomSelect style={{ width: "20%" }} />
        </CustomFormItem>
      </>
    )
  }
  return (
    <CustomLayout
      style={{
        background: "white",
        padding: "35px 20px",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
      }}
    >
      <CustomRow>
        <CustomCol xs={24}>
          <CustomTable columns={Columns} title={Title} />
        </CustomCol>
      </CustomRow>
    </CustomLayout>
  )
}
export default Score
