import { styled } from '@mui/material';

const ContainerRounded = styled('div')(({ theme, bgColor }) => {
    return {
        backgroundColor: theme.palette[bgColor || 'primary'].main,
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        borderTopRightRadius: '150px',
        position: 'relative',
    };
});

export default ContainerRounded;
