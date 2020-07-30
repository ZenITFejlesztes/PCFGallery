import {IInputs, IOutputs} from "./generated/ManifestTypes";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {RInputs, RProps, ROutputs} from "./inputInterfaces";


export class GalleryComponent implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    private hostContainer: HTMLDivElement;
    private topLVLContainer: HTMLElement;
    private context: ComponentFramework.Context<IInputs>;
    private notifyOutputChanged: () => void;
    private iinputs: IInputs;
    private inputs: RInputs;
    private outputs: IOutputs;

    private fontSize: number;
    private maxFontsize: number = 14;


	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
	{
        this.context = context;
        this.hostContainer = container;
        // this.hostContainer.style.overflow = "hidden";
        this.topLVLContainer = this.hostContainer.parentElement?.parentElement?.parentElement?.parentElement || this.topLVLContainer;
        this.setHostSize();
        this.refreshInputs();
        this.setFontsize();

        this.renderDOM()
    }

	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
        this.context = context;
        this.setHostSize();
        this.refreshInputs();
        this.setFontsize();

        this.renderDOM()
    }

	public getOutputs(): IOutputs
	{
		return this.outputs;
	}

	public destroy(): void
	{
        ReactDOM.unmountComponentAtNode(this.hostContainer);
    }
    
    private setHostSize(): void {
        this.hostContainer.style.width = this.topLVLContainer.offsetWidth + "px"
        this.hostContainer.style.height = this.topLVLContainer.offsetHeight + "px"
    }

    private setFontsize(): void {
        this.fontSize = Math.min(
            Math.floor(this.hostContainer.offsetWidth / 12),
            Math.floor(this.hostContainer.offsetHeight * 0.8),
            this.maxFontsize
        );
        this.hostContainer.style.fontSize = this.fontSize + "px";
    }

    private refreshInputs(): void {
        this.iinputs = {
            collJSON: this.context.parameters.collJSON || this.iinputs.collJSON,
            columnNames: this.context.parameters.columnNames || this.iinputs.columnNames,
            maxFontSize: this.context.parameters.maxFontSize || this.iinputs.maxFontSize
        }
        this.inputs = {
            collJSON: this.iinputs.collJSON.raw || this.inputs.collJSON,
            columnNames: this.iinputs.columnNames.raw || this.inputs.columnNames
        }
        this.maxFontsize = this.iinputs.maxFontSize.raw || this.maxFontsize

    }

    private setOutputs (newOutputs: ROutputs, resetAll: boolean): void {
        resetAll ? this.outputs = newOutputs : this.outputs = { ...this.outputs, ...newOutputs }
    }

    private renderDOM(): void {
        const props: RProps = {
            context: this.context,
            notifyOutputChanged: this.notifyOutputChanged,
            inputs: this.inputs,
            outputs: this.outputs,
            setOutputs: this.setOutputs,
            fontSize: this.fontSize
        }

        ReactDOM.render(
            React.createElement(App, props),
            this.hostContainer
        )
    }

}