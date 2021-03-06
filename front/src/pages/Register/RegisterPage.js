import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import PersonAdd from "@material-ui/icons/PersonAdd";
import TextField from "@material-ui/core/TextField";
import theme from "../../theme";
import styles from "./styles";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import api from "../../services/api";
import { login } from "../../services/auth";

import * as userActions from "../../_actions/user";

class RegisterPage extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    name: "",
    email: "",
    password: "",
    error: false,
    errorMessages: {}
  }

  registerUser = (e) => {
    e.preventDefault();

    api.post("/auth/register", this.state)
      .then((res) => {
        this.props.SaveUserData(res.data.data);
        login(res.data.data);
        // this.props.history.push('/');
        window.location.href = "/";
      })
      .catch((err) => {
        if(err.response) {
          this.setState({ error: true, errorMessages: err.response.data.errors });
        }
        console.log(this.state.errorMessages);
      });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <div style={styles.loginContainer}>
            <Paper style={styles.paper}>
              <form onSubmit={this.registerUser}>
                <TextField 
                  label="Nome" 
                  fullWidth={true}
                  required
                  error={Boolean(this.state.errorMessages.name)}
                  onChange={(e) => this.setState({ name: e.target.value, errorMessages: {} })}/>
             
                <div style={{ marginTop: 16 }}>
                  <TextField 
                    label="E-mail" 
                    fullWidth={true}
                    required
                    error={Boolean(this.state.errorMessages.email)}
                    helperText={this.state.errorMessages.email ? this.state.errorMessages.email[0] : ""}
                    onChange={(e) => this.setState({ email: e.target.value, errorMessages: {} })}/>
                </div>
             
                <div style={{ marginTop: 16 }}>
                  <TextField
                    label="Senha"
                    fullWidth={true}
                    required
                    error={Boolean(this.state.errorMessages.password)}
                    helperText={this.state.errorMessages.password ? this.state.errorMessages.password[0] : ""}
                    type="password"
                    onChange={(e) => this.setState({ password: e.target.value, errorMessages: {} })}/>
                </div>
              
                <div style={{ marginTop: 10 }}>
                  <Button 
                    type="submit"
                    variant="contained" 
                    color="primary" 
                    style={styles.loginBtn}>
                    Registrar
                  </Button>
                </div>
              </form>
            </Paper>

            <div style={styles.buttonsDiv} >
              <Button href="/login" style={styles.flatButton}>
                <PersonAdd />
                <span style={{ margin: 5 }}>Login</span>
              </Button>
            </div>

          </div>
        </div>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(userActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
