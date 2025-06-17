import models from '../assets/Models.json';
import mun from '../assets/Municipals.json';
import {SimpleSelect} from "../components/SimpleSelector.tsx";
import {StyledButton} from '../components/StyledButton';
import {Center} from "@mantine/core";
import { useState } from 'react';
import DmgMap from "../components/DamageMap.tsx";
import {fetchForecastData} from "../utils/api.tsx";
import {toForecastHeatmapPoints} from "../utils/transform.tsx";
import type {AllMunicipalityForecast} from "../types/types.tsx";

export function Forecast() {
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedMunicipality, setSelectedMunicipality] = useState('');
    const [showMap, setShowMap] = useState(false);

    function handleForecastClick() {
        if (!selectedModel) {
            alert("Please select a model");
            return;
        }
        if (!selectedMunicipality) {
            alert("Please select a municipality");
            return;
        }
        setShowMap(true); // only show the map if a model was selected
    }

    return (
        <Center style={{ flexDirection: 'column', paddingTop: '5%' }}>
            <div style={{ padding: '10px' }}>
                <SimpleSelect
                    placeholder={"Pick a Municipal"}
                    options={mun}
                    onChange={(pmun) => {
                        setSelectedMunicipality(pmun);
                    }}
                />
            </div>
            <div style={{ padding: '10px' }}>
                <SimpleSelect
                    placeholder={"Pick a Model"}
                    options={models}
                    onChange={(model) => {
                        setSelectedModel(model);
                        setShowMap(false); // reset map if new model is picked
                    }}
                />
            </div>
            <StyledButton
                text={"Forecast"}
                onClick={handleForecastClick}
            />
            <div style={{ padding: '10px' }}>
                {showMap && selectedModel && (
                    <DmgMap
                        fetcher={() => fetchForecastData(selectedModel)}
                        processor={(raw) => toForecastHeatmapPoints(raw as AllMunicipalityForecast, selectedMunicipality)}
                    />
                )}
            </div>
        </Center>
    );
}
