import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';

import classes from './styles.module.scss';

import { GlContext } from '../../Global/Context';

import icon from './photo/clock.png'
import delet from './photo/delet.png'

export const Event = () => {
    const { setShowEventModal, dayMain, dispatchEvent, selectedEvent } = useContext(GlContext);
    const [name, setName] = useState(selectedEvent ? selectedEvent.name : "");
    const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : "");
    const [time, setTime] = useState(selectedEvent ? selectedEvent.time : "");
    const [times, setTimes] = useState(selectedEvent ? selectedEvent.times : "");

    function handleSubmit(e) {
        e.preventDefault();
        const calendar = { name, description, time, times, day: dayMain.valueOf(), id: selectedEvent ? selectedEvent.id : Date.now(), };
        if (selectedEvent) {
            dispatchEvent({ type: "update", payload: calendar });
        } else {
            dispatchEvent({ type: "push", payload: calendar });
        }
        setShowEventModal(false);
    }
    return (
        <>
            <div className={classes.top}>
                <form className={classes.form}>
                    <div className={classes.context}>
                        <div className={classes.btnClose}>
                            <button onClick={() => setShowEventModal(false)} className={classes.close}>
                                <div >X</div>
                            </button>
                        </div>
                        <div className={classes.titleBlock}>
                            <div className={classes.name}>
                                <div className={classes.titleN}>Title</div>
                                <input type="text" placeholder=" Title" value={name} className={classes.boxName} onChange={(event) => setName(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className={classes.dayBlock}>
                            <div className={classes.dtBox}>
                                <img src={icon} className={classes.icon} />
                                <div className={classes.dateN}>Date</div>
                            </div>
                            <div className={classes.fullDate}>{dayMain.format("dddd  DD.MM.YYYY")}</div>
                        </div>
                        <div className={classes.descriptionBlock}>
                            <div className={classes.dsTitle}>Description</div>
                            <input type="text" placeholder="Description" value={description} className={classes.discription} onChange={(event) => setDescription(event.target.value)} />
                        </div>
                        <div className={classes.nameTime}>Time</div>
                        <div className={classes.timeBlock}>
                            <div>
                                <select className={classes.timeSel} value={time} onChange={(event) => setTime(event.target.value)}>
                                    <option>00</option>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                    <option>05</option>
                                    <option>06</option>
                                    <option>07</option>
                                    <option>08</option>
                                    <option>09</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                </select>
                            </div>
                            <div className={classes.colon}>:</div>
                            <div>
                                <div>
                                    <select className={classes.timeSel} value={times} onChange={(event) => setTimes(event.target.value)} >
                                        <option>00</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                        <option>04</option>
                                        <option>05</option>
                                        <option>06</option>
                                        <option>07</option>
                                        <option>08</option>
                                        <option>09</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                        <option>22</option>
                                        <option>23</option>
                                        <option>24</option>
                                        <option>25</option>
                                        <option>26</option>
                                        <option>27</option>
                                        <option>28</option>
                                        <option>29</option>
                                        <option>30</option>
                                        <option>31</option>
                                        <option>32</option>
                                        <option>33</option>
                                        <option>34</option>
                                        <option>35</option>
                                        <option>36</option>
                                        <option>37</option>
                                        <option>38</option>
                                        <option>39</option>
                                        <option>40</option>
                                        <option>41</option>
                                        <option>42</option>
                                        <option>43</option>
                                        <option>44</option>
                                        <option>45</option>
                                        <option>46</option>
                                        <option>47</option>
                                        <option>48</option>
                                        <option>49</option>
                                        <option>50</option>
                                        <option>51</option>
                                        <option>52</option>
                                        <option>53</option>
                                        <option>54</option>
                                        <option>55</option>
                                        <option>56</option>
                                        <option>57</option>
                                        <option>58</option>
                                        <option>59</option>
                                        <option>00</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={classes.buttonBox}>
                            {selectedEvent && (
                                <div
                                    onClick={() => {
                                        dispatchEvent({
                                            type: "delete",
                                            payload: selectedEvent,
                                        });
                                        setShowEventModal(false);
                                    }}
                                    className={classes.deletBtn}
                                >
                                    <img src={delet} alt="delet" className={classes.delet} />
                                </div>
                            )}
                            <div>
                                <button onClick={handleSubmit} className={classes.btnSubmit} type='submit'>Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

