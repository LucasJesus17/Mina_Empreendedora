import React, { useState, useEffect, ChangeEvent } from 'react';
import { styled } from '@mui/material/styles';
import {Box, Grid, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import { addToken } from "../../store/token/actions";
import { toast } from 'react-toastify';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

            useEffect(()=>{
                if(token != ''){
                    dispatch(addToken(token));
                    history.push('/home')
                }
            }, [token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login(`/usuarios/logar`, userLogin, setToken)
                toast.success('Usuário logado com sucesso!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                    });
            }catch(error){
                toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                    });
            }
        }

  return (
    <Box sx={{ width: '100%' }} className='mg'>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} className='imagem'>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' className="butao text-decorator-none">
                                    Logar
                                </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center" className='textos1'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario' className='text-decorator-none'>
                            <Typography variant="subtitle1" gutterBottom align="center" className='textos1'>Cadastre-se</Typography>
                        </Link>
                    </Box>
              
        </Grid>
      </Grid>
    </Box>
  );
}