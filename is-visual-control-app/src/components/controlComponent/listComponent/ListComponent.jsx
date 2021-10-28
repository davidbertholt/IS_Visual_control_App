import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateVideoActual } from '../../../store/slices/videoActual';
import { fetchAllVideos } from '../../../store/slices/videos';



const ListComponent = () => {
    const { list: videos } = useSelector(state => state.videos)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllVideos());
    }, [dispatch])

    const changeVideo = (video, index) => {
        dispatch(updateVideoActual({ ...video, index: index}));
    }

    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Videos</InputLabel>
                <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    label= 'Videos'
                >
                    {videos.map((video, index) => {
                        return (
                            <MenuItem
                                key = {index}
                                value = {video}
                            >
                                <Button
                                    variant='text'
                                    fullWidth
                                    onClick = {(event) => changeVideo( video, index )}
                                >
                                    {video.title}
                            </Button>
                            </MenuItem>
                        )}
                    )}
                </Select>
            </FormControl>
        </Box>
    )
}

export default ListComponent
