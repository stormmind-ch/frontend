import clusterSize from '../assets/ClusterSize.json';
import models from '../assets/Models.json';
import municipals from '../assets/Municipals.json';
import {SimpleSelect} from "../components/SimpleSelector.tsx";
import {StyledButton} from '../components/StyledButton';
import {Center} from "@mantine/core";

export function Forecast(){
    return(
        <Center style={{flexDirection: 'column', paddingTop: '5%'}}>

        <div  style={{padding:'10px'}}>
            <SimpleSelect placeholder={"Pick a Cluster Size"} options={clusterSize}/>
        </div>
        <div  style={{padding:'10px'}}>
            <SimpleSelect placeholder={"Pick a Model"} options={models}/>
        </div>
        <div  style={{padding:'10px'}}>
            <SimpleSelect placeholder={"Pick a Municipal"} options={municipals}/>
        </div>

            <StyledButton text={"Forecast"} url={"https://google.com"}/>

        </Center>
    )
}