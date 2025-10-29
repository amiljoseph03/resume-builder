import baseUrl from "./baseurl"
import commonAPI from "./commonAPI"

//addresumeAPI - POST
const addResumeAPI = async (resume)=>{
    return await commonAPI('POST',`${baseUrl}/resumes`,resume)
}