import { Image } from "antd"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getImagesSlide } from "../actions/images"
import {
  CustomCarousel,
  CustomCol,
  CustomDivider,
  CustomLayout,
  CustomRow,
  CustomTable,
} from "../AntDComponents"
import CustomCard from "../AntDComponents/CustomCard"
import { StoreState } from "../constant/types/store"

const Home = (): React.ReactElement => {
  const dispatch = useDispatch()
  const { imageSlide } = useSelector((state: StoreState) => state.images)
  useEffect(()=>{
    dispatch(getImagesSlide())
  },[dispatch])
  console.log(imageSlide);
  
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
            {imageSlide?.map((item) => (
              <CustomRow>
                <CustomCol xs={24} style={{textAlign:'center'}}>
                  <Image
                    style={{ height: "240px" }}
                    src={`http://127.0.0.1:1337${item.IMAGEN[0]?.url}`}
                  />
                </CustomCol>
              </CustomRow>
            ))}
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
export default Home
