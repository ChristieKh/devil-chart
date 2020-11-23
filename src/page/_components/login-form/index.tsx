import React, { Component } from "react";
import { Field, Form } from "react-final-form";
import { connect } from "react-redux";
import { InputForm } from "../../../_components/input-form";
import './index.css';
import { loginSagaAction } from "../../_redux/chart-module";
import { Action } from "../../../config-redux/_types";
import { LoginUserParamsType } from "../../_types";

type PropsType = {
    fetchLogin: Action<Record<string, string>>;
};

export class WrappedComponent extends Component<PropsType> {
    onSubmit = (values: LoginUserParamsType) => this.props.fetchLogin(values);

    render() {
        return(
            <div className="Container-form">
                <Form
                    initialValues={{}}
                    onSubmit={this.onSubmit}
                    render={({ handleSubmit }) => (
                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="Form-fields">
                                <div className="Form-field">
                                    <Field
                                        name="user"
                                        component={InputForm}
                                        id="user"
                                        label="Логин"
                                    />
                                </div>
                                <div className="Form-field">
                                    <Field
                                        type="password"
                                        name="password"
                                        component={InputForm}
                                        id="password"
                                        label="Пароль"
                                    />
                                </div>
                                <button type='submit'>Войти</button>
                            </div>
                        </form>
                    )}
                />
            </div>
        )
    }
}

export const ConnectedFormLogin = connect(null, {
    fetchLogin: loginSagaAction
})(WrappedComponent);