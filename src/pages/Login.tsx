import { Input } from "antd"
import React from "react"
import { UserOutlined } from "@ant-design/icons"
import styled from "styled-components"
import {
  CustomAvatar,
  CustomButton,
  CustomCol,
  CustomContent,
  CustomDivider,
  CustomFooter,
  CustomForm,
  CustomFormItem,
  CustomRow,
  CustomText,
} from "../AntDComponents"
import CustomLayoutBoxShadow from "../AntDComponents/CustomLayoutBoxShadow"
import { useDispatch, useSelector } from "react-redux"
import { AuthLogIn } from "../actions/session"
import { LogInType } from "../constant/types/session"
import { unauthorizedPostRequest } from "../utils/callers"
import { PATH_HOME, WEB_SERVICE_API_LOGIN } from "../constant/routes"
import { StoreState } from "../constant/types/store"
import { isLoggedIn } from "../utils/session"
import { Redirect } from "react-router-dom"

const StyledRow = styled(CustomRow)`
  height: 100vh;
`

const layout = {
  labelCol: { lg: 24, xxl: 6 },
  wrapperCol: { lg: 24, xxl: 16 },
}
const Login = (): React.ReactElement => {
  const dispatch = useDispatch()
  const { logInFetching } = useSelector((state: StoreState) => state.login)
 

  const onFinish = (values: LogInType) => {
    dispatch(AuthLogIn(values))
    
    console.log("Success:", unauthorizedPostRequest<LogInType>(
      WEB_SERVICE_API_LOGIN,
      values
    ))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo)
  }
  if (isLoggedIn()) {
    return <Redirect to={PATH_HOME} />
  }
  return (
    <StyledRow justify={"center"}>
      <CustomCol xs={5}>
        <CustomLayoutBoxShadow>
          <CustomContent>
            <CustomForm
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <CustomRow justify={"center"} gutter={[16, 16]}>
                <CustomCol xs={24} style={{ textAlign: "center" }}>
                  <CustomFormItem noStyle>
                    <CustomAvatar size={64} icon={<UserOutlined />} />
                  </CustomFormItem>
                </CustomCol>

                <CustomCol xs={24}>
                  {" "}
                  <CustomFormItem
                    label="Username"
                    name="identifier"
                    labelAlign={"left"}
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </CustomFormItem>
                </CustomCol>
                <CustomCol xs={24}>
                  {" "}
                  <CustomFormItem
                    label="Password"
                    name="password"
                    labelAlign={"left"}
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </CustomFormItem>
                </CustomCol>
                <CustomCol xs={24} style={{ textAlign: "center" }}>
                  <CustomButton loading={logInFetching} type="primary" htmlType="submit">
                    Submit
                  </CustomButton>
                </CustomCol>
                <CustomDivider />
                <CustomCol xs={24} style={{ textAlign: "center" }}>
                  <CustomButton type="link" htmlType="submit">
                    Forgot Password?
                  </CustomButton>
                </CustomCol>
              </CustomRow>
            </CustomForm>
          </CustomContent>
        </CustomLayoutBoxShadow>
        <CustomFooter style={{ textAlign: "center", backgroundColor: "white" }}>
          <CustomText strong>Copyright © Jonas</CustomText>
        </CustomFooter>
      </CustomCol>
    </StyledRow>
  )
}
export default Login
