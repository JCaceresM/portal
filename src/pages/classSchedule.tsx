
import React from "react"
import {

    CustomLayout
} from "../AntDComponents"
import TableSchedule from "../components/TableSchedule"

const classSchedule = (): React.ReactElement => {

  
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
       <TableSchedule/>
    </CustomLayout>
  )
}
export default classSchedule
