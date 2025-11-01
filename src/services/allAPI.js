import baseUrl from "./baseurl"
import commonAPI from "./commonAPI"

//addresumeAPI - POST
 export const addResumeAPI = async (resume)=>{
    return await commonAPI('POST',`${baseUrl}/resumes`,resume)
}

//edit resume api - PUT
export const editResumeAPI=async(id,resume)=>{
    return await commonAPI('PUT', `${baseUrl}/resumes/${id}`,resume)
}

//add download history - POST
export const addDownloadHistoryAPI=async(resume)=>{
    return await commonAPI('POST',`${baseUrl}/history`,resume)
}


//get history - POST
export const getHistoryAPI=async()=>{
    return await commonAPI('GET',`${baseUrl}/history`,{})
}

//delete history - POST
export const deleteHistoryAPI=async(id)=>{
    return await commonAPI('DELETE',`${baseUrl}/history/${id}`,{})
}


// get resume api , edit cheyymbo to get data
export const getResumeAPI=async(id)=>{
    return await commonAPI("GET",`${baseUrl}/resumes/${id}`,{})
}