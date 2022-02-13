import React, { ChangeEvent, useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ListaPostagem from '../../components/postagens/listapostagem/ListaPostagem';
import './Perfil.css'
import User from '../../models/User';



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



function Sobre() {
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })
    
    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })
    return (
        <>

            <div>
                <Grid container spacing={1} justifyContent='center'>
                    <Grid item xs={12} sm={12} md={12} >
                        <div className='fotoCapa'></div>

                        <div className="itemPerfil">

                            <img className='imgl' src={`https://github.com/maria.png`} style={{ borderRadius: "80px" }} />
                            <h3 className='nomePerfil'>Maria Joana</h3>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={7} >
                        <Item>
                            <p className='sobre'>Sobre</p>
                            <hr />
                            <p className='texto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ipsum ratione aperiam. Non ut quas rem quasi! Enim quas nesciunt iusto est, praesentium cumque culpa. Culpa impedit voluptatibus voluptate beatae.</p>
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