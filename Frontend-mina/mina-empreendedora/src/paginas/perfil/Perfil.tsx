import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ListaPostagem from '../../components/postagens/listapostagem/ListaPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import Box from '@mui/material/Box';
import './Perfil.css'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Sobre() {
    return (
        <>

            <div>
                <Grid container spacing={1} justifyContent='center'>
                    <Grid item xs={12} sm={12} md={8} >
                        <img className='fotoCapa' src={`https://i.imgur.com/Df9NPjM.jpg`} />

                        <div className="itemPerfil">

                            <img className='imgl' src={`https://github.com/maria.png`} style={{ borderRadius: "80px" }} />
                            <h3 className='nomePerfil'>Maria Joana</h3>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={7} >
                    <Item>
                    <p className='sobre'>Sobre</p>
                        <hr />
                        <p className='texto'>Ola eu sou maria e gosto de natureza.</p>
                    </Item>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} >
                        <ListaPostagem />
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default Sobre;