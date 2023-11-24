import React from 'react'
import handShake from "../assets/bookMyShow/handShake.webp"
import bookMyShow from "../assets/bookMyShow/bookMyShowImg.webp"
import { Box, Typography, Stack } from "@mui/material"
const BookMyShow = () => {

    return (
        <Box style={{ background: '#F7F9FC' }} height={{ xs: '185px', sm: "340px" }} display={"flex"} justifyContent={"center"} alignItems={"center"} marginTop={{xs:"30px",sm:'60px'}}>
            <Box
                display="inline-flex"
                width={{sm:'70%',xs:'100%'}}
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="center"
                gap={{ xs: 2.62, sm: 4.94 }}
                paddingTop={{xs:'0px',sm:'40px'}}

            >
                <Stack display={"flex"} direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={{ xs: 0.38, sm: 1.25 }}>
                    <img src={handShake} alt="" style={{
                        width: { xs: '1.4375rem', sm: '2.8125rem' },
                        height: { xs: '1.4375rem', sm: '2.8125rem' }
                    }} />
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#231656',
                            textAlign: 'center',
                            fontFamily: 'Satoshi',
                            fontStyle: 'normal',
                            fontSize: { xs: '1.5rem', sm: '3.125rem'},
                            fontWeight: 900,
                            lineHeight: 'normal',
                        }}

                    >
                       Ticketing Partner
                    </Typography>
                </Stack>
                <Box sx={{
                    width: { xs: '139.355px', sm: '250px' },
                    height: { xs: '51px', sm: '91.493px' },
                }}>
                    <img src={bookMyShow} alt="bookMyShowTicket" style={{width:'100%'}}/>
                </Box>

            </Box>
        </Box>

    )
}

export default BookMyShow