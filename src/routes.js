import React from 'react'
import { Image } from 'react-native'
import { createAppContainer , createStackNavigator } from 'react-navigation'

import logo from './assets/instagram.png'

import Feed from './pages/Feed'

const Routes = createAppContainer(
    createStackNavigator({
      Feed
    },{
      headerLayoutPreset: 'center',
      defaultNavigationOptions:{
        headerTitle: <Image source={logo} />,
        headerStyle: {
          backgroundColor: '#F5F5F5',
        }
      },
    })
  )

  export default Routes