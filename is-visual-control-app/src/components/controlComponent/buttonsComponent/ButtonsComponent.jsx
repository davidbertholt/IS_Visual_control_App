import { Button, ButtonGroup } from '@material-ui/core'
import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@material-ui/icons';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateReproductionState } from '../../../store/slices/reproductionState';
import { updateVideoActual } from '../../../store/slices/videoActual';

const ButtonsComponent = () => {
    const { video: actual } = useSelector(state => state.videoActual)
    const { list: videos } = useSelector(state => state.videos)
    const { isPaused } = useSelector(state => state.reproductionState)

    const dispatch = useDispatch();

    // Prev
    const changePrevVideo = () =>
    dispatch(updateVideoActual({ ...videos[actual.index - 1], index: actual.index -1}));

    // Next
    const changeNextVideo = () =>
        dispatch(updateVideoActual({ ...videos[actual.index + 1], index: actual.index + 1}));

    // Pause
    const changeReproductionState = () =>
        dispatch(updateReproductionState(!isPaused));

    return (
        <div>
            <ButtonGroup variant='contained' aria-label='outlined primary button group'>
                <Button
                    onClick = {(event) => changePrevVideo()}
                    disabled = {actual?.index === 0}
                >
                    <SkipPrevious />
                </Button>
                {isPaused
                    ?   <Button
                            onClick = {(event) => changeReproductionState()}
                        >
                            <PlayArrow />
                        </ Button>
                    :   <Button
                            onClick = {(event) => changeReproductionState()}
                        >
                            <Pause />
                        </Button>
                }
                <Button
                    onClick = {(event) => changeNextVideo()}
                    disabled = {actual?.index === videos.length - 1}
                >
                    <SkipNext/>
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default ButtonsComponent
