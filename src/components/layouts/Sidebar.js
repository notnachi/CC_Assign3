import React from 'react';
import {
    FaChevronDown,
    FaInbox,
    FaRegCalendarAlt,
    FaRegCalendar,
  } from 'react-icons/fa';

export const Sidebar = () => {
    return (
        <div className = "sidebar">
            <ul className="sidebar__generic">
                <li>
                    <span><FaInbox /></span>
                    <span>My Inbox</span>
                </li>
                <li><span><FaRegCalendar /></span>
                    <span>Today</span>
                </li>
                <li>
                    <span><FaRegCalendarAlt /></span>
                    <span>Last week</span>
                </li>
            </ul>

            <div className="sidebar__middle">
                <span><FaChevronDown /></span>
                <h2>Subjects</h2>
            </div>

            <ul className = "sidebar__projects">Subjects will be shown here</ul>
            Add subject component here

        </div>

        
    )
}
