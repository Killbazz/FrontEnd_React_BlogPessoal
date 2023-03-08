import React from "react";
import { Button, Paper, Grid, Typography } from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import { Box } from "@mui/material";
import './Home.css';
import { Height } from "@material-ui/icons";

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className= 'titulo'> Café com Marlon!</Typography> 
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center"  className= 'titulo'> Deixe aqui sua mensagem ou apoio!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Mais</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://imgur.com/kuvsOAv.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;