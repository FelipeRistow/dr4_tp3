import React from "react";
import {Alert, AlertProps} from "@mui/material";

interface IAlertProps extends AlertProps {
    children: React.ReactNode;
}

const AlertComponent: React.FC<IAlertProps> = ({children, ...props}) => {
    return <Alert {...props}>
        {children}
    </Alert>
}

export default AlertComponent;
