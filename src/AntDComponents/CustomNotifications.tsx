import { notification } from "antd"
import React from "react" 

import {
  CheckCircleTwoTone,
  ExclamationCircleOutlined,
} from "@ant-design/icons"
import { Modal } from "antd"

import { ModalFuncProps } from "antd/lib/modal"
type NotificationType = "success" | "error" | "info" | "warning"

type NotificationParametersType = {
  title: string
  description: string
  type: NotificationType
  duration?: number
  onClick?: () => void
}

export const CustomModalConfirm = (props: ModalFuncProps): void => {
  Modal.confirm({
    visible: false,
    title: "Confirmar",
    content: "content: Alguna descripcion",
    ...props,
  })
}
export const CustomModalError = (props: ModalFuncProps): void => {
  Modal.error({
    title: "Confirmar",
    content: "content: Alguna descripcinón",
    ...props,
  })
}
export const CustomModalInfo = (props: ModalFuncProps): void => {
  Modal.info({
    title: "Confirmar",
    content: "content: Alguna descripción",
    ...props,
  })
}
export const CustomModalSuccess = (props: ModalFuncProps): void => {
  Modal.success({
    title: "Confirmar",
    icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
    content: "content: Alguna descripción",
    ...props,
  })
}
export const CustomModalWarning = (props: ModalFuncProps): void => {
  Modal.warning({
    title: "Confirmar",
    icon: <ExclamationCircleOutlined />,
    content: "content: Alguna descripción",
    ...props,
  })
}

export const showNotification = (
  parameters: NotificationParametersType
): void => {
  notification[parameters.type]({
    message: parameters.title,
    description: parameters.description,
    onClick: parameters.onClick,
    duration: parameters.duration ? parameters.duration : 60,
  })
}

