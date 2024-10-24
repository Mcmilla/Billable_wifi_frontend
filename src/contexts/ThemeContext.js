import { createTheme, CssBaseline } from "@mui/material";
import React, { createContext, useContext, useState } from "react";

import {ThemeProvider as MuiThemeProvider} from "@mui/material";


const ThemeContext=createContext();


export const useThemeContext=()=>useContext(ThemeContext)


export const ThemeProvider=({children})=>{
    const [isDarkMode, setIsDarkMode]=useState(false)


    // define the dark mode and light mode options 

    const LightTheme=createTheme({
        palette: {
            mode:'light',
            primary:{
                main:'#1976d2' //primary color
            },
            secondary:{
                main:'#9c27b0'
            },
            background:{
                default:'#f4f6f8',
                paper:'#ffffff'

            },
            text:{
                primary:'#03045e' ,//this is the text color 

                secondary:'#ffffff' 

            },
            action:{
                hover:'#ade8f4',
                active:'#0077b6'

            }
    
        },
        typography:{
            fontFamily:['poppins', 'sans-serif'].join(',')

        }, 
       
        spacing:8,

        shape:{
            borderRadius:8,

        }

    })


    const darkTheme=createTheme({
        palette: {
            mode:'dark',
            primary:{
                main:'#90caf9'

            },
            secondary:{
                main:'#ce93d8'
            },
            background:{
                default: '#121212',
                paper:'1d1d1d1d'
            }
        }
    })

    const toggleTheme =()=>{
        setIsDarkMode(!isDarkMode)
    }

    const theme= isDarkMode? darkTheme :LightTheme

    return(
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                {children}

            </MuiThemeProvider>



        </ThemeContext.Provider>
    )







}