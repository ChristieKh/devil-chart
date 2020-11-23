import React from "react";
import { ResponsiveLineCanvas } from "@nivo/line";
import { commonProperties } from "../../../_constants";
import { Component } from "react";
import { connect } from "react-redux";
import { ReduxStoreType } from "../../_redux/_types";
import {
    CharItemType,
    getChartDataSagaAction,
    getChartDataSelector,
    isLoadingChartSelector
} from "../../_redux/chart-module";
import { BaseAction } from "../../../config-redux/_types";

type PropsType = {
    chartData: Array<CharItemType>;
    isLoadingChart: boolean;
    fetchChartData: BaseAction;
};

type StateType = {
    delay: number;
}

export class WrappedComponent extends Component<PropsType, StateType> {
    interval: NodeJS.Timeout;

    state = {
        delay: 5000
    }

    componentDidMount() {
       this.interval = setInterval(this.props.fetchChartData, this.state.delay)
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<StateType>) {
        if(prevState.delay !== this.state.delay) {
            clearInterval(this.interval);
            this.interval = setInterval(this.props.fetchChartData, this.state.delay)
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
    return(
        <>
            {/*{this.props.isLoadingChart ? <p>Loading...</p> :*/}
                <ResponsiveLineCanvas
                    {...commonProperties}
                    data={this.props.chartData}
                    xScale={{
                        type: 'time',
                        format: '%Y-%m-%dT%H:%M:%S.%fZ',
                        precision: 'day',
                    }}
                    xFormat="time:%Y-%m-%d"
                    yScale={{
                        type: 'linear',
                    }}
                    axisLeft={{
                        legend: 'time scale',
                        tickValues: 'every 2 days',
                        legendOffset: 12,
                    }}
                    axisBottom={{
                        legend: 'linear scale',
                        legendOffset: -12,
                    }}
                    pointSize={16}
                    pointBorderWidth={1}
                    pointBorderColor={{
                        from: 'color',
                        modifiers: [['darker', 0.3]],
                    }}
                />
            {/*}*/}
            </>
    )}
}

const mapStateToProps = (state: ReduxStoreType) => ({
    chartData: getChartDataSelector(state),
    isLoadingChart: isLoadingChartSelector(state)
});

export const ConnectedChart = connect(mapStateToProps, {
    fetchChartData: getChartDataSagaAction
})(WrappedComponent);