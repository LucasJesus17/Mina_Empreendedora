import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/token/tokenReducer';
import { toast } from 'react-toastify';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ShareIcon from '@mui/icons-material/Share';
import ReplyIcon from '@mui/icons-material/Reply';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

function ListaPostagem() {

  const [posts, setPosts] = useState<Postagem[]>([])
  let history = useHistory();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


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

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <>
      {

        posts.map(post => (

          <Box m={3} className='box-shadow pai' >

            <Card variant="outlined">

              <CardContent >
                <Typography className='filho'>
                  <Box display='flex' >
                    <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                      <EditIcon />
                    </Link>
                    <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                      <DeleteIcon />
                    </Link>
                  </Box>
                </Typography>

                <Stack direction="row" spacing={2}>
                  <Avatar alt="Remy Sharp" src={`https://github.com/maria.png`} />
                  <h4 className='nomeHome'>Maria</h4>
                  <h6 className='descHome nome'>Engenheira sênior de confiabilidade do Google</h6>
                </Stack>
                <hr />

                <Typography variant="h5" component="h2">
                  {post.titulo}
                </Typography>
                <hr />
                <Typography variant="body2" component="p">
                  {post.texto}
                </Typography>
                <hr />
                <img
                  style={{
                    objectFit: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'relative'
                  }}
                  src={`${post.foto}`} alt="" />

                <hr />

                <div style={{
                  margin: 'auto',
                  display: 'block',
                  width: 'fit-content'
                }}>
                  <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="checkedH" />}
                    label=""
                  />

                  <FormControlLabel
                    control={<Checkbox icon={<MessageIcon />}
                      checkedIcon={<MessageIcon />}
                      name="checkedH" />}
                    label=""
                    color="default"

                  />



                  <FormControlLabel
                    control={<Checkbox icon={<ArrowRightAltIcon />}
                      checkedIcon={<ArrowRightAltIcon />}
                      name="checkedH" />}
                    label=""
                    color="primary"
                  />
                </div>
                <hr />
              </CardContent>
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListaPostagem;