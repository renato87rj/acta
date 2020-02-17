import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { grey } from "@material-ui/core/colors";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Help from "@material-ui/icons/Help";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import theme from "../theme";

const RegisterPage = () => {
  const styles = {
    loginContainer: {
      minWidth: 320,
      maxWidth: 400,
      height: "auto",
      position: "absolute",
      top: "20%",
      left: 0,
      right: 800,
      margin: "auto"
    },
    paper: {
      padding: 20,
      overflow: "auto",
      backgroundColor: '#eeeeee'
    },
    buttonsDiv: {
      textAlign: "center",
      padding: 10
    },
    flatButton: {
      color: grey[500],
      margin: 5
    },
    checkRemember: {
      style: {
        float: "left",
        maxWidth: 180,
        paddingTop: 5
      },
      labelStyle: {
        color: grey[500]
      },
      iconStyle: {
        color: grey[500],
        borderColor: grey[500],
        fill: grey[500]
      }
    },
    loginBtn: {
      float: "right"
    },
    btn: {
      background: "#4f81e9",
      color: "white",
      padding: 7,
      borderRadius: 2,
      margin: 2,
      fontSize: 13
    },
    btnSpan: {
      marginLeft: 5
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div style={styles.loginContainer}>
          <Button href="/" style={styles.flatButton}>
            Voltar
          </Button>
          <Paper style={styles.paper}>
            <form>
                <TextField hintText="Name" label="Nome" fullWidth={true} />
              <div style={{ marginTop: 16 }}>
                <TextField hintText="E-mail" label="E-mail" fullWidth={true} />
              </div>
              <div style={{ marginTop: 16 }}>
                <TextField hintText="Password" label="Senha" fullWidth={true} type="password" />
              </div>
              <div style={{ marginTop: 10 }}>
                <Link to="/">
                  <Button variant="contained" color="primary" style={styles.loginBtn}>
                    Registrar
                  </Button>
                </Link>
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
};

export default RegisterPage;