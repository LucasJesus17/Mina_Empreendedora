import * as React from 'react';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Sobre.css';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Sobre() {
    return (
        <>
            <Grid container spacing={1} justifyContent='center'>

                <Grid item xs={12} sm={12} md={3} >
                    <Item className="item box">
                        <img className='imgl' src={`https://github.com/ErikyYamakawa.png`} style={{ borderRadius: "80px" }} />
                        <hr />
                        <a className='nome'>
                            Eriky Yamakawa
                        </a>
                        <hr />
                        <a href="https://github.com/ErikyYamakawa" target='_blank' ><GitHubIcon></GitHubIcon></a>
                        <a href="https://www.linkedin.com/in/eriky-yamakawa-2bb00a1b3/" target='_blank' ><LinkedInIcon></LinkedInIcon></a>
                    </Item>
                </Grid>

                <Grid item xs={12} sm={12} md={3} >
                    <Item className="item box">
                        <img className='imgl' src={`https://github.com/GeisianHReis.png`} style={{ borderRadius: "80px" }} />
                        <hr />
                        <a className='nome'>
                            Geisian Reis
                        </a>
                        <hr />
                        <a href="https://github.com/GeisianHReis" target='_blank' ><GitHubIcon></GitHubIcon></a>
                        <a href="https://www.linkedin.com/in/geisian-reis/" target='_blank' ><LinkedInIcon></LinkedInIcon></a>
                    </Item>
                </Grid>

                <Grid item xs={12} sm={12} md={3} >
                    <Item className="item box">
                        <img className='imgl' src={`https://github.com/LucasJesus17.png`} style={{ borderRadius: "80px" }} />
                        <hr />
                        <a className='nome'>
                            Lucas Silva
                        </a>
                        <hr />
                        <a href="https://github.com/LucasJesus17" target='_blank' ><GitHubIcon></GitHubIcon></a>
                        <a href="https://www.linkedin.com/in/lucas-silva-7a5b85219/" target='_blank' ><LinkedInIcon></LinkedInIcon></a>
                    </Item>
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                    <Item className="item box">
                        <img className='imgl' src={`https://github.com/LemosRafra.png`} style={{ borderRadius: "80px" }} />
                        <hr />
                        <a className='nome'>
                            Rafael Lemos
                        </a>
                        <hr />
                        <a href="https://github.com/LemosRafra" target='_blank' ><GitHubIcon></GitHubIcon></a>
                        <a href="https://www.linkedin.com/in/rafael-lemos-790bb71b2/" target='_blank' ><LinkedInIcon></LinkedInIcon></a>
                    </Item>
                </Grid>

                <Grid item xs={12} sm={12} md={4} >
                    <Item className="item box">
                        <img className='imgl' src={`https://github.com/vinnyteixeira.png`} style={{ borderRadius: "80px" }} />
                        <hr />
                        <a className='nome'>
                            Vinicius Teixeira
                        </a>
                        <hr />
                        <a href="https://github.com/vinnyteixeira" target='_blank' ><GitHubIcon></GitHubIcon></a>
                        <a href="https://www.linkedin.com/in/vinicius-teixeira-rocha-aa62b61b1/" target='_blank' ><LinkedInIcon></LinkedInIcon></a>
                    </Item>
                </Grid>

                <Grid item xs={12} sm={12} md={10} >
                    <Item className="item ">
                        <h1>De onde surgiu a ideia do mina empreendedora ?</h1>

                        <p className='texto'>A mina empreendedora nasceu de um objetivo,
                         fazer com que atrav??s das conex??es realizadas em nossa rede,
                         mulheres de todo o brasil possam se comunicar e realizar trocas de servi??os, 
                         atrav??s de uma rede-social capaz de unifica-las.</p>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={10} >
                    <Item className="item ">
                        <h1>Mais de 30,000,000 de mulheres no Brasil s??o empreendedoras</h1>

                        <p className='texto'>Segundo dados Sebrae e da Pesquisa Global Entrepreneurship Monitor 2020 (GEM),
                        o Brasil ?? o s??timo pa??s com o maior n??mero de mulheres empreendedoras no mundo.
                         Dos 52 milh??es de empreendedores no pa??s, 30 milh??es (48%) s??o mulheres.</p>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={10} >
                    <Item className="item ">
                        <h1>O que nos motiva ?</h1>

                        <p className='texto'>Uma das principais motiva????es do mina empreendedora ?? criar um local onde mulheres empreendedoras de todo o pais,
                         possam criar la??os e se fortalecerem atrav??s de um ambiente acolhedor,
                         onde poder??o publicar suas ideias e entrar em contato com demais empreendedoras.</p>
                    </Item>
                </Grid>
            </Grid>
        </>
    );
}

export default Sobre;