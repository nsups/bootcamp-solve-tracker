// interface Submissions{

// }

import { Submissions } from "../types/vjudge";

export const parseSubmissions = (json_response: any): Submissions => {
    try {
        const submissions_info = json_response['submissions'] as number[][];
        const length = Math.floor(json_response["length"] / 1000);
        var submissions: Submissions = {};
        submissions_info.forEach( ( [ userId, problemNo, verdict,  submissionTime ] ) => {
            if(!submissions[userId]){
                submissions[userId] = [{ problemNo, verdict, submissionTime, isUpsolve: submissionTime > length }];
            }else{
                submissions[userId].push( { problemNo, verdict, submissionTime, isUpsolve: submissionTime > length } );
            }
        });
    } catch (error) {
        console.log(error);
        return {} as Submissions;
    }
    return submissions;
}


// 780848