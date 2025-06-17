import models from '../assets/Models.json';
import mun from '../assets/Municipals.json';
import {SimpleSelect} from "../components/SimpleSelector.tsx";
import {StyledButton} from '../components/StyledButton';
import {Center} from "@mantine/core";
import { useState, useEffect } from 'react';
import DmgMap from "../components/DamageMap.tsx";
import {fetchForecastData} from "../utils/api.tsx";
import {toForecastHeatmapPoints} from "../utils/transform.tsx";
import type {AllMunicipalityForecast} from "../types/types.tsx";

export function Forecast() {
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedMunicipality, setSelectedMunicipality] = useState('');
    const [showMap, setShowMap] = useState(false);
    const [forecastData, setForecastData] = useState<AllMunicipalityForecast | null>(null);
    const [forecastValue, setForecastValue] = useState<number | null>(null);

    useEffect(() => {
        if (!forecastData || !selectedMunicipality) return;

        const forecastEntry = forecastData.forecastDtos.find(
            ({ forecast }) => forecast.municipality.name === selectedMunicipality
        );

        setForecastValue(forecastEntry?.forecast.forecast ?? null);
    }, [selectedMunicipality, forecastData]);

    async function handleForecastClick() {
        if (!selectedModel) {
            alert("Please select a model");
            return;
        }
        if (!selectedMunicipality) {
            alert("Please select a municipality");
            return;
        }
        try {
            const data = await fetchForecastData(selectedModel);
            setForecastData(data as AllMunicipalityForecast);

            /*const forecastEntry = (data as AllMunicipalityForecast).forecastDtos.find(
                ({ forecast }) => forecast.municipality.name === selectedMunicipality
            );*/

            //setForecastValue(forecastEntry?.forecast.forecast ?? null);
        } catch (err) {
            console.error("Failed to fetch forecast data", err);
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
            />{forecastValue !== null && (
            <div style={{ padding: '15px' }}>
                The forecast value for <strong>{selectedMunicipality}</strong> is: <strong>{forecastValue?.toFixed(3)}</strong>. <br />
            </div>)}
            <div style={{ padding: '10px' }}>
                {showMap && selectedModel && (
                    <DmgMap
                        fetcher={() => fetchForecastData(selectedModel)}
                        processor={(raw) => toForecastHeatmapPoints(raw as AllMunicipalityForecast, selectedMunicipality)}
                    />
                )}
            </div>
            <div style={{ padding: '10px' }}>
                {forecastValue !== null && (
                    <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
                        The highlighted area on the map marks all municipalities that belong to the corresponding cluster (warning region). <br />
                        The color on the map is not related to the intensity or likelihood of damage; <br/>
                        it represents the density of municipalities within each cluster. <br />

                        <br />
                        Please note:<br />
                        A value of 0 means that the model is highly confident that no damage event will occur in this cluster within the next 7 days. <br />
                        A value of 1, on the other hand, indicates the highest level of model confidence that a damage event is very likely to occur during this period. <br />
                    </div>
                )}
            </div>
        </Center>
    );
}
