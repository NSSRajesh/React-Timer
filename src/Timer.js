

function Timer({time,start,stop}){

    const {ms,s,m,h}=time;

    return(
        <div className="con">
                <div className="col">
                    <h2>STOP WATCH</h2>
                    <div className="time-hour">
                        <span>
                            {h>=10 ? h : "0" + h}
                        </span>
                        <span className="colon">:</span>
                        <span>
                            {m>=10 ? m : "0" + m}
                        </span>
                        <span className="colon">:</span>
                        <span>
                            {s>=10 ? s : "0" + s}
                        </span>
                        <span className="colon">:</span>
                        <span>
                            {ms>=10 ? ms : "0" + ms}
                        </span>
                    </div>
                    <div className="start-stop">
                        <button className="start-btn" onClick={start}>Start</button>
                        <button className="stop-btn" onClick={stop}>Stop</button>
                    </div>
                </div>
                
                                 
        </div>
    )
}

export default Timer;