import clusterSize from '../assets/ClusterSize.json';
import models from '../assets/Models.json';
import municipals from '../assets/Municipals.json';
import {SimpleSelect} from "../components/SimpleSelector.tsx";

export function Forecast(){
    return(<>
        <div  style={{padding:'10px'}}>
            <SimpleSelect placeholder={"Pick a Cluster Size"} options={clusterSize}/>
        </div>
        <div  style={{padding:'10px'}}>
            <SimpleSelect placeholder={"Pick a Model"} options={models}/>
        </div>
            <div  style={{padding:'10px'}}>
                <SimpleSelect placeholder={"Pick a Municipal"} options={municipals}/>
            </div>
        </>
    )
}