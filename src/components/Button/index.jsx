import React from 'react';
import { GlContext } from '../../Global/Context';
import { useContext } from 'react';

export const Button = () => {
    const { setShowEventModal } = useContext(GlContext)
    return (
        <button onClick={() => setShowEventModal(true)}>Add</button>
    );
}


