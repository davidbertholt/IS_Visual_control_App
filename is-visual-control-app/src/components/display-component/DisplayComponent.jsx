import { Box, Card, CardContent, CircularProgress, Container, makeStyles, Typography } from '@material-ui/core'
import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    video: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        minHeight: '300px',
        background: 'black',
        color: 'white'
    }
});

const DisplayComponent = () => {

    const { isPaused } = useSelector(state => state.reproductionState)

    const [play, setPlay] = useState(true)

    useEffect(() => {
        setPlay(!isPaused);
        render();
    }, [isPaused])

    const { video: actual } = useSelector(state => state.videoActual)

    const classes = useStyles();

    return (
        <Container maxWidth ='md'>
            <Card
                sx={{
                    maxWidth: 345,
                }}
            >
                <Box className = {classes.video}>
                    { actual
                        ?   <ReactPlayer
                                width = '100%'
                                playing = {play}
                                url = { actual?.sources }
                            />
                        :   <CircularProgress />
                    }

                </Box>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start'
                    }}
                >
                    <Typography gutterBottom variant='h3' component='div'>
                        {actual?.title}
                    </Typography>
                    <Typography gutterBottom variant='h5' component='div'>
                        {actual?.subtitle}
                    </Typography>
                    <Typography variant='body2' gutterBottom>
                        {actual?.description}
                    </Typography>
                    <Typography variant='caption' gutterBottom>
                        {actual?.thumb}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default DisplayComponent
