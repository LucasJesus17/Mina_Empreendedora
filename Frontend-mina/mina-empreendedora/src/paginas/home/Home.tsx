import React, { ChangeEvent, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useHistory, useParams, Link } from 'react-router-dom';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { busca, buscaId, post, put } from '../../services/Service';
import { TokenState } from '../../store/token/tokenReducer';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { SelectChangeEvent } from '@mui/material/Select';
import Tema from '../../models/Tema';
import Postagem from '../../models/Postagem';
import "./Home.css"
import ListaPostagem from '../../components/postagens/listapostagem/ListaPostagem';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Input = styled('input')({
    display: 'none',
});



export default function AutoGrid() {

    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem atualizada com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem cadastrada com sucesso', {
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
        back()

    }

    function back() {
        history.push('/home')
    }

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")

        }
    }, [token])

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            descricao: '',
            tema: ''
        })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        tema: null
    })

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function getTemas() {
        await busca("/tema", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3} xs>
                <Grid item xs={12} sm={12} md={3} >
                    <Item className="item box">
                        <Link to='/perfil'>
                            <img className='imgl' src={`https://github.com/maria.png`} style={{ borderRadius: "80px" }} />
                        </Link>
                        <hr />
                        <a className='nome'>
                            Maria
                        </a>
                        <hr />
                    </Item>
                </Grid>

                <Grid item xs={12} sm={12} md={6} >

                    <Box marginRight={3} className='postagem'>
                        <ModalPostagem />
                    </Box>
                    <ListaPostagem />
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                    <Item className="item box">
                        <p>
                            Patrocinado:
                        </p>
                        <img className='imgl' src="https://i.pinimg.com/originals/27/28/d9/2728d98ff83ab793d078265288379104.gif" />
                    </Item>
                    <Item className="item ">

                        <Link to='/sobre'>sobre</Link>

                    </Item>
                </Grid>
            </Grid>
        </Box >
    );
}
