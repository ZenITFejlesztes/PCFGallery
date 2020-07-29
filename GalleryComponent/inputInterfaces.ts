import {IInputs, IOutputs} from "./generated/ManifestTypes"

export interface RInputs {
    collJSON: string;
}

export interface ROutputs {
    xDATAOUT?: string;
    xEVENT?: string;
}

export interface RProps {
    context: ComponentFramework.Context<IInputs>;
    notifyOutputChanged: () => void;
    inputs: RInputs;
    outputs: IOutputs;
    setOutputs: (newOutputs: ROutputs, resetAll: boolean) => void;
    fontSize: number;
}