import React, { memo } from "react";
import { ConnectedChart } from "./_components/chart";
import './index.css';
import { ConnectedFormLogin } from "./_components/login-form";
import { connect } from "react-redux";
import { isUserLoginSelector } from "./_redux/chart-module";
import { ReduxStoreType } from "./_redux/_types";

type PropsType = {
    isUserLogin: boolean;
}

const WrappedContainer = memo(({isUserLogin}: PropsType) => (
    <div className="Container-chart">
        {!isUserLogin ? <ConnectedFormLogin /> : <ConnectedChart />}
    </div>
));

const mapStateToProps = (state: ReduxStoreType) => ({
    isUserLogin: isUserLoginSelector(state)
});

export const Page = connect(mapStateToProps)(WrappedContainer);