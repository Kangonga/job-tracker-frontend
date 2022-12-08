import { useEffect } from "react"
import { useState } from "react"
export default function Active(){
    const [job,setJob] = useState({})
    const [applied,setApplied] = useState([])
    function moreDetails(job){
        setJob(job)

    }
    useEffect(()=>{
        fetch("/applications")
        .then(resp=>resp.json())
        .then(data=>setApplied(data))
    },[])
    function handleChange(e){

        setJob({
            ...job,
            application_stage: e.target.value
        })
        console.log(job)

    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/applications/${job.id}`,{
            method:"PATCH",
            headers:{"content-type": "application/json"},
            body: JSON.stringify({
                user_id:job.user.id,
                job_id:job.job.id,
                application_stage:job.application_stage
            })
        })
        .then(resp=>resp.json())
        .then(data=>console.log("updated",data))

    }
    return (
        <>
        <div className="jobsBoard">
            <div id="onlyJobs">
            <h2>My Job applications</h2>
        {applied?.map((job,index)=>{
            return(
            <div key={index} className="job" onClick={(e)=>moreDetails(job,e)}>
                <div className="jobTitle">{job.job.job_title}</div>
                <div className="updateJob">
                <div className="jobCompany">{job.job.company_name}</div>
                <button onClick={(e)=>deleteApplication(e,job)} className="update">Delete</button>
                </div>
            </div>
            )
                })}
            </div>
         <form id="jobDetails" className={job?"show":"hide"} onSubmit={handleSubmit}>
                <h4>Job Title</h4>
                <h3>{job?.job_title}</h3>
                <div className="jobDesc">
                    <h4>Description</h4>
                    <input name="description" type="text" value={job?.job?.description} disabled/>
                </div>
                <div className="jobDesc">
                    <h4>Company Name</h4>
                    <input name="company_name" disabled value={job?.job?.company_name} />
                </div>
                <div className="jobDesc">
                    <h4>Qualifications</h4>
                    <input name="qualifications" disabled value={job?.job?.qualifications} />
                </div>
                <div className="jobDesc">
                    <h4>Deadline</h4>
                    <input name="deadline" disabled value={job?.job?.deadline} />
                </div>
                <div className="jobDesc">
                    <h4>Status</h4>
                    <input name="appliaction_stage"  value={job?.application_stage} onChange={handleChange}/>
                    {console.log("yow",job)}
                </div>
                <button>
                    Update Application
                </button>
            </form>
            </div>
        </>
    )
}






