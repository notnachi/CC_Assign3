import React from 'react'
import { Tasks } from '../Tasks'
import {Header} from './Header'
import {Sidebar} from './Sidebar'

export const Content = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            <Tasks />
        </div>
    )
}
