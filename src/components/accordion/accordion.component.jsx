import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, styled } from '@mui/material';

const CustomizedAccordion = styled(Accordion)(() => ({
    '&:first-of-type, :last-of-type': {
        borderRadius: '20px',
    },
    borderRadius: '20px',
    border: '1px solid #5A5956',
    minHeight: '74px',
    marginBottom: '12px',
    boxShadow: 'none',
}));
const CustomizedAccordionSummary = styled(AccordionSummary)(() => ({
    '& .MuiAccordionSummary-content': {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));
export const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};

export default function PurchaseAccordion({
    id,
    expanded,
    data,
    onChangeHandler,
}) {
    return (
        <CustomizedAccordion expanded={expanded} onChange={onChangeHandler}>
            <CustomizedAccordionSummary
                id={`accordion-${id}`}
                expandIcon={<ExpandMoreIcon />}
            >
                <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                        {data.store}
                    </Typography>
                    <Typography variant="subtitle2">{`${data.items.length} productos`}</Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                        ${data.total || 0}
                    </Typography>
                    <Typography variant="subtitle2">
                        {formatDate(data.operationDateTime)}
                    </Typography>
                </Box>
            </CustomizedAccordionSummary>
            <AccordionDetails>
                {data.items.map((item) => (
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 5fr 1fr',
                            alignItems: 'center',
                            borderTop: '1px solid',
                            borderColor: 'gray.main',
                            paddingTop: '1rem',
                        }}
                    >
                        <Box
                            sx={{ color: 'green.main' }}
                        >{`x${item.quantity}`}</Box>
                        <Box sx={{ display: 'flex' }}>
                            <img
                                width="50px"
                                style={{ objectFit: 'cover' }}
                                src={item.image}
                                alt=""
                            />
                            <div>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: 800 }}
                                >
                                    {item.name}
                                </Typography>
                                <Typography variant="subtitle2">
                                    {item.description}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: 800 }}
                                >
                                    ${item.unitPrice}
                                </Typography>
                            </div>
                        </Box>
                        <Box>
                            <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: 800, color: 'green.main' }}
                            >
                                ${item.total}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </AccordionDetails>
        </CustomizedAccordion>
    );
}
