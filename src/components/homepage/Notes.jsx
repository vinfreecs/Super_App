import { useState } from "react"

export default function Notes(){
    const [notes,setNotes] = useState(localStorage.getItem("notes"))

    const handleNotesChange = (e)=>{
        setNotes(e.target.value)
        localStorage.setItem("notes",notes)
    }
    return(
        <>
            <div className="notes-wrapper">
                <p>ALL NOTES</p>
                <textarea name="notes" id="" onChange={handleNotesChange} value={notes} ></textarea>
            </div>
        </>
    )
}