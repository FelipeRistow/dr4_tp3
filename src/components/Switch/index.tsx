import React from "react";
import {Switch, SwitchProps} from "@mui/material";

interface ISwitchProps extends SwitchProps {
}

const SwitchComponent: React.FC<ISwitchProps> = ({...props}) => {
    return <Switch {...props}/>
}

export default SwitchComponent;
