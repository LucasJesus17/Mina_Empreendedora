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
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
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

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
}));

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
            tema: 'Tema'
        })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        tema: null,
        usuario: null
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

                    <Item className="item box">
                        <p>
                            Patrocinado:
                        </p>
                        <img className='imgl' src="data:image/jpeg;base64,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" />
                    </Item>

                    <Item className="item text-decoration-none">
                        <Link to='/sobre' className="nome">sobre</Link>
                        <Link to='/contato' className="nome"> - contato</Link>
                    </Item>
                </Grid>
            </Grid>
        </Box >
    );
}
