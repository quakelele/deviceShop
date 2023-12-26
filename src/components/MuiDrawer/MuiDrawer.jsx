import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import s from './MuiDrawer.module.scss'
import { Drawer, AppBar, Box, Toolbar, Typography, IconButton, Stack, Button } from "@mui/material"
import ShopButton from '..//..//components/Buttons/ShopButton/ShopButton'
import Categories from '..//Categories/Categories'
import { categoriesList } from '..//../utils/localData'
import { changeCategory } from '..//..//redux/slices/deviceSlice'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const MuiDrawer = () => {
    const dispatch = useDispatch()
    const { filter } = useSelector(state => state.device)
    const [isDrawerOpen, setIsDraweOpen] = React.useState(false)
    return (
        <>
            <AppBar position='static' >
                <Toolbar  >
                    <Box>
                        <Stack mb={-3} mt={3} p={2} ml={3} pr={25} direction='row' spacing={15}>
                            <Link style={{ textDecoration: 'none' }} to="/">
                                <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}><p>CyberShop</p>
                                </Typography>
                            </Link>
                            <IconButton
                                size='large'
                                edge='start'
                                color='inherit'
                                aria-label='logo'
                                onClick={() => setIsDraweOpen(true)}>
                                <MenuIcon />
                            </IconButton>
                            <input className={s.input2} />
                            <ShopButton />
                        </Stack>
                    </Box>
                </Toolbar>
                <Drawer


                    anchor='left'
                    open={isDrawerOpen}
                    onClose={() => setIsDraweOpen(false)}>
                    <Box p={5} flex='row' mt={5} width={500} textAlign='center' role='presentation'>
                        <Typography variant='h4' component='div'>
                            <div className={s.menu__category}>
                                <ul className={s.categories__wrapper}>
                                    {categoriesList.map((item, index) =>
                                        <li key={index}
                                            className={`${item === filter.category ? s.active : s.categories__list}`}
                                            onClick={() => dispatch(changeCategory(item))}
                                        >{item}
                                        </li>)}
                                </ul>
                            </div>

                        </Typography>
                    </Box>
                </Drawer>
            </AppBar>
        </>

    )
}

export default MuiDrawer