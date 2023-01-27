import React from 'react';
import classes from './styles.module.scss'
import { GlContext } from '../../Global/Context';
import { useContext } from 'react';

export const Event = () => {
    const { setShowEventModal } = useContext(GlContext)
    return (
        <>
            <div className={classes.top}>
                <form className={classes.form}>
                    <div className={classes.box}>
                        <div className={classes.icon}>
                            =
                        </div>
                        <button onClick={() => setShowEventModal(false)} className={classes.close}>
                            <div >X</div>
                        </button>
                    </div>
                </form>
            </div>
        </>

    );
}


