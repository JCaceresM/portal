import React from "react"
import {
  CustomCol,
  CustomLayout,
  CustomRow,
  CustomTable,
  CustomTitle,
} from "../AntDComponents"
import TableSchedule from "../components/TableSchedule"

const Inscription = (): React.ReactElement => {
  const columnsProjected = [{ title: "Codigo" }, { title: "Nombre" }]
  const titleProjected = () => {
    return <CustomTitle level={5}>Proyectadas</CustomTitle>
  }
  const columnsClassHours = [{ title: "Codigo" },{ title: "Dia" }, { title: "Hora" },{ title: "Profesor" }]
  const titleClassHours = () => {
    return <CustomTitle level={5}>Horarios Disponibles</CustomTitle>
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
      <CustomRow gutter={[16,16]}>
        <CustomCol xs={12}>
          <CustomTable title={titleProjected} columns={columnsProjected} />
        </CustomCol>
        <CustomCol xs={12}>
          <CustomTable title={titleClassHours} columns={columnsClassHours} />
        </CustomCol>
        <CustomCol xs={24}>
        <CustomTitle level={5}>Selecionadas</CustomTitle>
          <TableSchedule />
        </CustomCol>
      </CustomRow>
    </CustomLayout>
  )
}
export default Inscription
