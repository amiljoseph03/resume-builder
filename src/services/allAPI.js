import baseUrl from "./baseurl"
import commonAPI from "./commonAPI"

//addresumeAPI - POST
 export const addResumeAPI = async (resume)=>{
    return await commonAPI('POST',`${baseUrl}/resumes`,resume)
}