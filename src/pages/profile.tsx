import React from "react"
import { CustomCol, CustomLayout, CustomRow } from "../AntDComponents"
import CustomCard from "../AntDComponents/CustomCard"
import LogoComponent from "../components/LogoComponent"

const profile = (): React.ReactElement => {
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
          <CustomLayout
            style={{
              background: "#e6f7ff",
              padding: "35px 20px",
              marginLeft: 5,
              marginRight: 5,
              marginBottom: 10,
            }}
          >
            <CustomRow gutter={[16, 16]}>
              <CustomCol xs={24} style={{ textAlign: "center" }}>
                <LogoComponent />
              </CustomCol>
            </CustomRow>
          </CustomLayout>
        </CustomCol>
        <CustomCol xs={24}>
          <CustomRow gutter={[16, 16]}>
            <CustomCol xs={6}>
              <CustomCard title="CustomCard title" bordered={true}>
                CustomCard content
              </CustomCard>
            </CustomCol>
            <CustomCol xs={6}>
              <CustomCard title="CustomCard title" bordered={true}>
                CustomCard content
              </CustomCard>
            </CustomCol>
            <CustomCol xs={6}>
              <CustomCard title="CustomCard title" bordered={true}>
                CustomCard content
              </CustomCard>
            </CustomCol>
            <CustomCol xs={6}>
              <CustomCard title="CustomCard title" bordered={true}>
                CustomCard content
              </CustomCard>
            </CustomCol>
          </CustomRow>
        </CustomCol>
      </CustomRow>
    </CustomLayout>
  )
}
export default profile
