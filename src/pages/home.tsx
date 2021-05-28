import { Image } from "antd"
import React from "react"
import {
  CustomCarousel,
  CustomCol,
  CustomDivider,
  CustomLayout,
  CustomRow,
  CustomTable,
} from "../AntDComponents"
import CustomCard from "../AntDComponents/CustomCard"
import { getSessionInfo } from "../utils/session"

const home = (): React.ReactElement => {
  const userImg = getSessionInfo()?.image
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
      <CustomRow gutter={[16, 16]}>
        <CustomCol xs={24}>
          {" "}
          <CustomCarousel
            autoplay
            style={{
              maxHeight: "240px",
              textAlign: "center",
              backgroundColor: "#364d79",
            }}
          >
            <CustomRow>
              <CustomCol xs={24}>
                <Image
                  style={{ height: "240px" }}
                  src={`http://127.0.0.1:1337${userImg.url}`}
                />
              </CustomCol>
            </CustomRow>
            <CustomRow>
              <CustomCol xs={24}>
                <Image style={{ height: "240px" }} src={"/assets/11.jpg"} />
              </CustomCol>
            </CustomRow>
          </CustomCarousel>
        </CustomCol>
        <CustomCol xs={6}>
          {" "}
          <CustomCard title="Card title" bordered={true}>
            Card content
          </CustomCard>
        </CustomCol>
        <CustomCol xs={6}>
          {" "}
          <CustomCard title="CustomCard title" bordered={true}>
            CustomCard content
          </CustomCard>
        </CustomCol>
        <CustomCol xs={6}>
          {" "}
          <CustomCard title="CustomCard title" bordered={true}>
            CustomCard content
          </CustomCard>
        </CustomCol>
        <CustomCol xs={6}>
          {" "}
          <CustomCard title="CustomCard title" bordered={true}>
            CustomCard content
          </CustomCard>
        </CustomCol>
        <CustomCol xs={24}>
          <CustomCard title="CustomCard title" bordered={true}>
            CustomCard content
          </CustomCard>
        </CustomCol>
        <CustomDivider />
        <CustomCol
          xs={12}
          style={{ borderRight: "1px solid rgba(0, 0, 0, 0.06)" }}
        >
          <CustomTable />
        </CustomCol>
        <CustomCol xs={12}>
          {" "}
          <CustomCard title="CustomCard title" bordered={true}>
            CustomCard content
          </CustomCard>
        </CustomCol>
      </CustomRow>
    </CustomLayout>
  )
}
export default home
