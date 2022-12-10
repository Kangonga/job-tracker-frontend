import { useState } from "react"
import { useEffect } from "react"

export default function Jobs(){
    function createApplication(e,job){
        e.preventDefault()
        let params = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify({
                job_id:job.id,
                user_id:1
            }) ,
             
            // user_id:user.id
        }
        console.log("job",job)

        fetch("/applications",params)
        .then(resp=>resp.json())
        .then(data=>console.log(data))
    }
    function moreDetails(e){
        // console.log("target",e)
        setJob({
            id: e.id,
            title: e.job_title,
            description: e.description,
            deadline: e.deadline,
            qualifications:e.qualifications,
            company_name: e.company_name
        })
    }
    const [jobs, setJobs] = useState([])
    const [job,setJob] = useState({})
    useEffect(()=>{
        fetch("/jobs")
        .then(resp=>resp.json())
        .then(data=>setJobs(data))
    },[])
    return(
        
        <div className="jobsBoard">
            {console.log(jobs)}
            <div id="onlyJobs">
                <h2>WishList</h2>
                {jobs?.map((job,index)=>{
                    return(
                    <div key={index} className="job" onClick={()=>moreDetails(job)}>
                        <div className="jobTitle">{job.job_title}</div>
                        <div className="jobCompany">{job.company_name}</div>
                    </div>
                    )

                })}
            </div>
            <form id="jobDetails" className={job.title?"show":"hide"}>
                <h3>{job?.title}</h3>
                <div className="jobDesc">
                    <h4>Description</h4>
                    <input name="description" value={job?.description} disabled/>
                </div>
                <div className="jobDesc">
                    <h4>Company Name</h4>
                    <input name="company_name" value={job?.company_name} disabled/>
                </div>
                <div className="jobDesc">
                    <h4>Qualifications</h4>
                    <input name="qualifications" value={job?.qualifications} disabled/>
                </div>
                <div className="jobDesc">
                    <h4>Deadline</h4>
                    <input name="deadline" value={job?.deadline} disabled/>
                </div>
                <button onClick={(e)=>createApplication(e,job)} className="update">Apply</button>
            </form>
        </div>
    )
}