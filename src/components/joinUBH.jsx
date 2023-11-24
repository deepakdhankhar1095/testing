import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
function JoinUBH() {
    const email = 'namaskara@unboxingblr.com';
        const handleEmailClick = () => {
            window.location.href = `mailto:${email}`;
        };

    return (
        <Stack sx={{ width: '100%', height: '293px', display: "flex", flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { xs: 'space-bewteen', sm: 'space-around' }, alignItems: 'center' }}>
            <Stack sx={{ width: { xs: '332px', sm: '615px' }, height: { xs: '183px', sm: '145px' }, gap: '1.625rem', flexDirection: 'column', marginTop: { xs: '30px', sm: '0px' } }}  >
                <Typography
                    variant="h3"
                    sx={{
                        color: '#231656',
                        fontFamily: 'Satoshi',
                        fontSize: { xs: '1.25rem', sm: '1.875rem' },
                        fontStyle: 'normal',
                        fontWeight: 900,
                        lineHeight: 'normal',
                        textAlign: 'center'
                    }}
                >
                    Wish to join UBH 2023 as a participating event partner?
                </Typography>


                <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'flex-start', alignItems: 'center', gap: '0.5rem' }}>
                    <Stack sx={{ flexDirection: 'row', justifyContent: { xs: 'center', sm: 'flex-start' }, alignItems: 'center', gap: '0.75rem' }}>
                        <EditIcon />
                        <Typography
                            sx={{
                                color: '#231656',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: { xs: '1.125rem', sm: '1.5rem' },
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '153.023%', // 2.29531rem
                            }}
                        >
                            Write to us at
                        </Typography>

                    </Stack>

                    <Typography
                        sx={{
                            color: '#7C0632',
                            fontFamily: 'Inter',
                            fontSize: { xs: '1.125rem', sm: '1.5rem' },
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '153.023%',
                            textDecorationLine: 'underline',
                            cursor: 'pointer',
                        }}
                        onClick={handleEmailClick}
                    >
                        {email}
                    </Typography>
                </Stack>

            </Stack>

            <Box sx={{
                width: { xs: '9.8125rem', sm: '15.5rem' },
                height: { xs: '2.5625rem', sm: '3.91031rem' },
                flexShrink: 0,
                borderRadius: '39.515px',
                background: 'var(--Warm-Yellow, #FDD503)', display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>
                <Typography
                    sx={{
                        color: '#7D0732',
                        textAlign: 'center',
                        fontFamily: 'Satoshi',
                        fontSize: { xs: '1.125rem', sm: '1.85225rem' },
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal',
                    }}
                >
                    #UBH2023
                </Typography>
            </Box>

        </Stack>

    );
}

export default JoinUBH;
