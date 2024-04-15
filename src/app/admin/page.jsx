"use client";

import { PageWrapper } from "../components/PageWrapper";
import { useState, useEffect } from "react";
import styled from 'styled-components';
import {carModels, defaultLocation, defaultYears, defaultModels, defaultSelectedCarModels} from '../constants/constants'

export const StyledFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;

    .field {
        display: flex;
        justify-content: center;
        padding: 8px;

        input {
            width: 40%;
            height: 40px;
        }

        select {
            width: 40%;
            height: 40px;
        }
    }
`;

export default function Admin() {
    const [disableModels, setDisableModels] = useState(true);
    const [selectedCarModels, setDefaultCarModels] = useState(defaultSelectedCarModels.filter(item => item.selected))

    // useEffect(() => {
    //     console.log('Call', )

    // }, [disableModels])

    return (
        <PageWrapper>
            <div>Create Car</div>
            <StyledFormWrapper>
                <div className="field">
                    <input type="text" placeholder="Image ref" />
                </div>
                <div className="field">
                    <select>
                        {carModels.map((carModel, index) => (
                            <option key={index} selected={carModel.selected}>
                            {carModel.name}
                            </option>
                        ))}
                        </select>
                </div>
                <div className="field">
                <select>
                  {defaultLocation.map((location, index) => (
                    <option key={index} selected={location.selected}>
                      {location.name}
                    </option>
                  ))}
                </select>
                </div>
                <div className="field">
                <select>
                  {defaultYears.map((year, index) => (
                    <option key={index} selected={year.selected}>
                      {year.name}
                    </option>
                  ))}
                </select>
                </div>

                <div className="field">
                <select onChange={(e) => {
                    if(e.target.value === '---') {
                        setDisableModels(true);
                        setDefaultCarModels(defaultSelectedCarModels.filter(item => item.selected));
                    } else {
                        setDisableModels(false);
                        setDefaultCarModels(defaultSelectedCarModels.filter(item => item.madeByKey === e.target.value || item.name === '---'))
                    }
                }}>
                  {defaultModels.map((model, index) => (
                    <option key={index} selected={model.selected}>
                      {model.name}
                    </option>
                  ))}
                </select>
                </div>
                <div className="field">
                <select disabled={disableModels}>
                  {selectedCarModels.map((model, index) => (
                    <option key={index} selected={model.selected}>
                      {model.name}
                    </option>
                  ))}
                </select>
                </div>
                <div className="field">
                    <input type="text" placeholder="Price" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Currency" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Fuel Type" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Millage" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Transmition" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Labels" />
                </div>
                
                
                
        
                
                
                
                
            </StyledFormWrapper>
           
        </PageWrapper>
    )
}
