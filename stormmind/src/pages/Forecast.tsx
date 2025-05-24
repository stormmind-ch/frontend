import models from '../assets/Models.json';
import municipalities from '../assets/Municipals.json';
import {SimpleSelect} from "../components/SimpleSelector.tsx";
import {StyledButton} from '../components/StyledButton';
import {Center} from "@mantine/core";
import React, { useState } from 'react';

export function Forecast(){
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedMunicipality, setSelectedMunicipality] = useState('');
    const [forecastResult, setForecastResult] = useState<number | null>(null);
    async function handleForecastClick() {
        if (!selectedModel || !selectedMunicipality) {
            alert("Please select both a model and a municipality");
            return;
        }

        const url = `${import.meta.env.VITE_FORECAST_URL}/${selectedModel}/${selectedMunicipality}`;

        try {
            const res = await fetch(url, {
                method: 'GET'
            });

            if (!res.ok) {
                throw new Error("Forecast request failed");
            }

            const data = await res.json();
            setForecastResult(data);
        } catch (e) {
            console.error('Error:', e);
            setForecastResult(null);
        }
    }


    return(
        <Center style={{flexDirection: 'column', paddingTop: '5%'}}>
        <div  style={{padding:'10px'}}>
            <SimpleSelect
                placeholder={"Pick a Model"}
                options={models}
                onChange={setSelectedModel}
            />
        </div>
        <div  style={{padding:'10px'}}>
            <SimpleSelect
                placeholder={"Pick a Municipality"}
                options={municipalities}
                onChange={setSelectedMunicipality}
            />
        </div>
            <StyledButton
                text={"Forecast"}
                onClick={handleForecastClick}
            />
            <div style={{padding:'10px'}}>
                {forecastResult !== null ? (
                    <p>Forecast result: <strong>{forecastResult}</strong></p>
                ) : (
                    <p>Data will appear here.</p>
                )}
            </div>
        </Center>
    )
}
